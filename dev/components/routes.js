import components from './components'
import Main from './Main.vue'

const routes = []

export const menu = []

function loadComponent (path, meta, file, filePath) {
  return {
    path,
    meta,
    component: () => import(`./${filePath}/${file}`)
  }
}

const componentsMain = {
  path: '/',
  component: Main,
  children: []
}

components.forEach(category => {
  if (category.extract) {
    return
  }

  menu.push({headerTitle: category.title})

  category.components.forEach(component => {
    let path = component.path ? component.name : `components/${component.name}`
    let file = component.name
    let filePath = component.path || `examples/${component.name}`

    component.name && componentsMain.children.push(loadComponent(path, component, file, filePath))

    let itemMenu = {
      name: component.title,
      icon: component.icon
    }
    if (!component.components) {
      itemMenu.href = `#/` + path
    }

    if (component.components) {
      let subItems = []
      component.components.forEach(tab => {
        let subpath = path + '/' + tab.name
        let subFile = tab.path ? `${tab.path}/${tab.name}` : tab.name
        let subpathFile = `${filePath}`
        tab.name && componentsMain.children.push(
          loadComponent(subpath, {title: tab.title}, subFile, subpathFile)
        )
        subItems.push({
          name: tab.title,
          icon: tab.icon,
          href: `#/` + subpath
        })
      })
      itemMenu.submenu = subItems
    }

    menu.push(itemMenu)
  })
})

routes.push(componentsMain)
routes.push({path: '/*', component: () => import('./Error404.vue')})

export default routes
