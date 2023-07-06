import { Component } from '@angular/core';
import { Todo } from './todo/todo.model';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todos: Todo[] = [new Todo("Imp Task (LL ko tang krna heheh)")]

  constructor(private localStorage: LocalStorageService) { }

}
