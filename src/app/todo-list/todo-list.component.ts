import { Component } from '@angular/core';
import { Todo } from './todo/todo.model';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todos: Todo[] = []

  constructor(private localStorage: LocalStorageService) { }

  ngOnInit() {
    this.todos = this.localStorage.getData("todos") ? JSON.parse(this.localStorage.getData("todos")!) : this.todos
  }

  addTodo(e: Event) {
    this.todos.push(new Todo(e + ""))
    this.onSaved()
  }
  
  onDeleted(todo: Todo) {
    console.log("del event");
    this.todos = this.todos.filter(t => t != todo)
    console.log("this.todos: ", this.todos);

  }

  onSaved() {
    this.localStorage.saveData("todos", JSON.stringify(this.todos))
  }
}
