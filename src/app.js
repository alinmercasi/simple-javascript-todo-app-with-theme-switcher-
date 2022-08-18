import { handleChangeInDom, changeTheme } from './components/themeSwitcher.js'
import { DOM } from './utils/globals.js'
import {
  handleAdd,
  handleDelete,
  handleToggle,
  renderTodos,
} from './components/todos.js'

window.addEventListener('load', () => {
  // handle todos
  renderTodos()
  DOM.submit.addEventListener('click', handleAdd)
  DOM.container.addEventListener('click', handleToggle)
  DOM.container.addEventListener('click', handleDelete)

  // theme toggler
  handleChangeInDom()
  DOM.themeToggler.addEventListener('click', changeTheme)
})
