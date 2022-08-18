class Todos {
  constructor() {
    this.todos = JSON.parse(localStorage.getItem('todos')) ?? []
  }

  #update(todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  addTodo(text) {
    const todo = {
      id: Date.now(),
      text,
      completed: false,
    }
    this.todos.push(todo)
    this.#update(this.todos)
  }

  toggleTodo(id) {
    this.todos = this.todos.map(todo => {
      return todo.id == id
        ? { id: todo.id, text: todo.text, completed: !todo.completed }
        : todo
    })
    this.#update(this.todos)
  }

  // I cant make it work yet on DOM part. I want to set contenteditable to the text and get the value from there, but as far as I tried it's buggy. I will come back when I will get more experience on js
  // updateTodo(id, text) {
  //   this.todos = this.todos.map((todo) =>
  //     [added to not colorize the todo <smarter comments>] todo.id === id ? { id: todo.id, text, completed: todo.completed } : todo
  //   );
  //   this.#update(this.todos);
  // }

  deleteTodo(id) {
    this.todos = this.todos.filter(todo => todo.id != id)
    this.#update(this.todos)
  }

  getTodos() {
    return this.todos
  }
}

export default Todos
