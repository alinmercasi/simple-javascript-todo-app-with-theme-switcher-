import Todos from '../model/Todos.js'
import { createElement, parseBool, clearElement } from '../utils/utils.js'
import { DOM } from '../utils/globals.js'

const todos = new Todos()

const renderTodos = () => {
  const todoList = todos.getTodos()

  // clear dom before rerendering
  clearElement(DOM.container)

  if (!todoList.length)
    DOM.container.innerHTML = '<p>Nothing to do! Add a task?</p>'

  // loop over todos and create elements
  todoList.forEach(({ id, text, completed }) => {
    const todoItem = createElement('article', 'flex', 'todo', 'gap-s')
    const todoText = createElement('span', 'todo-text')
    const deleteButton = createElement(
      'button',
      'color-secondary',
      'delete-button',
    )
    const check = createElement('input', 'todo-toggle')
    check.type = 'checkbox'

    const docFrag = document.createDocumentFragment()

    todoItem.dataset.id = id
    todoItem.dataset.completed = completed
    check.checked = parseBool(todoItem.dataset.completed)

    todoItem.append(check)
    todoItem.append(todoText)
    todoItem.append(deleteButton)

    todoText.innerText = text
    deleteButton.innerText = 'delete()'

    docFrag.append(todoItem)
    DOM.container.append(docFrag)
  })
}

const handleToggle = event => {
  const toggler = event.target
  if (!toggler.className.match('todo-toggle')) return
  const id = parseInt(event.target.parentNode.dataset.id)
  toggler.addEventListener('transitionend', () => {
    todos.toggleTodo(id)
    renderTodos()
  })
}

const handleDelete = event => {
  if (!event.target.className.match('delete-button')) return
  const id = parseInt(event.target.parentNode.dataset.id)
  todos.deleteTodo(id)
  renderTodos()
}

const handleAdd = event => {
  if (!DOM.input.value) return
  event.preventDefault()
  todos.addTodo(DOM.input.value)
  DOM.input.value = ''
  renderTodos()
}

export { handleAdd, handleDelete, handleToggle, renderTodos }
