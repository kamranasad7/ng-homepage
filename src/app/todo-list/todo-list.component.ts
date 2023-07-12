import { Component, ElementRef, SimpleChanges, ViewChild } from '@angular/core';
import { Todo } from './todo/todo.model';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todos: Todo[] = []
  @ViewChild("todoList") todoListRef!: ElementRef

  constructor(private localStorage: LocalStorageService) { }

  ngOnInit() {
    this.todos = this.localStorage.getData("todos") ? JSON.parse(this.localStorage.getData("todos")!) : this.todos
  }

  ngAfterViewChecked() {
    
  }

  addTodo(e: Event) {
    this.todos.push(new Todo(e + ""))
    this.onSaved()
    setTimeout(() => this.todoListRef.nativeElement.scrollTop = this.todoListRef.nativeElement.scrollHeight, 200)
  }
  
  onDeleted(todo: Todo) {
    this.todos = this.todos.filter(t => t != todo)
  }

  onSaved() {
    this.localStorage.saveData("todos", JSON.stringify(this.todos))
  }
}
