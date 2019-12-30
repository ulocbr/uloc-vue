const
  path = require('path'),
  fs = require('fs-extra'),
  shell = require('shelljs'),
  stylus = require('stylus'),
  rtl = require('postcss-rtl'),
  postcss = require('postcss'),
  cssnano = require('cssnano'),
  autoprefixer = require('autoprefixer'),
  buildConf = require('./build.conf'),
  buildUtils = require('./build.utils'),
  pathList = [path.join(__dirname, '../src/assets/styl/')],
  comments = require('postcss-discard-comments'),
  processor = postcss([autoprefixer, comments({
    removeAll: true
  })])

// Copy Assets
fs.copy(path.resolve(__dirname, '../src/assets'), 'dist/assets', function (err) {
  if (err) return console.error(err)
  // Clean css dir
  shell.rm('-rf', path.resolve(__dirname, '../dist/assets/styl'))
  console.log('Assets dir copied')
  generateFonts()
})

Promise
  .all(
    [0].map(generateTheme)
      // .concat(generateAddon())
  )
  .catch(e => {
    console.error(e)
  })

function generateTheme () {
  const src = `src/assets/styl/app.styl`
  const deps = stylus(buildUtils.readFile(src))
    .set('paths', pathList)
    .deps().filter((d) => !d.endsWith('src/assets/styl/fonts.styl') && d.indexOf('src/assets/vendor/') === -1 && d.indexOf('src/assets/fonts/') === -1)

  return generateFiles({
    sources: [src].concat(deps),
    name: '',
    styl: true
  })
}

function generateFonts () {
  console.log('Generate Fonts...')
  stylus(buildUtils.readFile('src/assets/styl/fonts.styl').replace(/\.\.\//g, './assets/'))
    .set('paths', pathList)
    .render(function (err, css) {
      if (err) {
        console.log()
        console.log('Stylus could not compile file...\n')
        throw err
      }

      buildUtils.writeFile('dist/fonts.css', css, false)
        .then(function (data) {
          processor.process(data, {from: 'dist/fonts.css', to: 'dist/fonts.css'})
            .then(result => {
              buildUtils.writeFile('dist/fonts.css', buildConf.banner + result.css, true)
              cssnano.process(data, {from: 'dist/fonts.css', to: 'dist/fonts.min.css'}).then(function (result) {
                buildUtils.writeFile('dist/fonts.min.css', buildConf.banner + result.css, true)
              })
            })
        })
    })
}

function generateFiles ({sources, name, styl}) {
  return prepareStylus(sources)
    .then(code => {
      if (styl) {
        return buildUtils.writeFile(`dist/uloc${name}.styl`, code)
      }
      else {
        return code
      }
    })
    .then(code => compileStylus(code))
    .then(code => postcss([autoprefixer]).process(code, {from: void 0}))
    .then(code => {
      code.warnings().forEach(warn => {
        console.warn(warn.toString())
      })
      return code.css
    })
    .then(code => Promise.all([
      generateUMD(name, code),
      postcss([rtl({})]).process(code, {from: void 0}).then(code => generateUMD(name, code.css, '.rtl'))
    ]))
}

function generateUMD (name, code, ext = '') {
  return buildUtils.writeFile(`dist/uloc${name}${ext}.css`, code, true)
    .then(code => cssnano.process(code, {from: void 0}))
    .then(code => buildUtils.writeFile(`dist/uloc${name}${ext}.min.css`, code.css, true))
}

function prepareStylus (src) {
  return new Promise((resolve, reject) => {
    let code = buildConf.banner

    src.forEach(function (file) {
      code += buildUtils.readFile(file) + '\n'
    })

    code = code
    // remove imports
      .replace(/@import\s+'[^']+'[\s\r\n]+/g, '')
      // remove comments
      .replace(/(\/\*[\w'-.,`\s\r\n*@]*\*\/)|(\/\/[^\r\n]*)/g, '')
      // remove unnecessary newlines
      .replace(/[\r\n]+/g, '\n')

    resolve(code)
  })
}

function compileStylus (code) {
  return new Promise((resolve, reject) => {
    stylus(code)
      .set('paths', pathList)
      .render((err, code) => {
        if (err) {
          console.log()
          reject(err)
        }
        else {
          resolve(code)
        }
      })
  })
}

function writeFile (file, data, logger = false, cbsucess = function () {
}) {
  fs.writeFile(file, data, 'utf-8', function (err) {
    if (err) {
      console.log('Could not write ' + file + ' file...')
      return
    }
    // logger && console.log(file.bold + ' ' + getSize(data).gray)
    cbsucess(file, data)
  })
}
