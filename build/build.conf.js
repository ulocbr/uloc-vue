const version = process.env.VERSION || require('../package.json').version

module.exports = {
  version,
  banner:
    '/*!\n' +
    ' * Uloc Framework v' + version + '\n' +
    ' * (c) 2018 Tiago Felipe\n' +
    ' * Released under the MIT License.\n' +
    ' */\n'
}
