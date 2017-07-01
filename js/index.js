var app = new Vue({
  el: '#app',
  data: {
    todos:[],
    filterTodos: [],
    newTodo: '',
    all: true,
    completed: false,
    uncomplete: false
  },
  methods: {
    addTodo: function(todo) {
      if (!todo || !todo.trim()) return;
      this.todos.push({
        id: this.todos.length + 1,
        content: todo,
        complete: false
      });
      this.filterTodos = this.todos.slice();
      this.newTodo = '';
    },
    removeTodo: function(todo) {
      var idx = this.todos.findIndex(function (item) {
        return todo.id === item.id
      });
      this.todos.splice(idx, 1);
      this.filterTodos = this.todos.slice();
    },
    showAll: function() {
      this.filterTodos = this.todos.slice();
      
      this.all = true;
      this.completed = false;
      this.uncomplete = false;
    },
    showCompleted: function() {
      this.filterTodos = this.todos.slice().filter(function(todo) {
        return todo.complete;
      });
      
      this.all = false;
      this.completed = true;
      this.uncomplete = false;
    },
    showUncomplete: function() {
      this.filterTodos = this.todos.slice().filter(function(todo) {
        return !todo.complete;
      });
      
      this.all = false;
      this.completed = false;
      this.uncomplete = true;
    }
  }
})