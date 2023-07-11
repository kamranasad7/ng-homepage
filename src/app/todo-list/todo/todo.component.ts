import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from "@angular/core"
import { Todo } from "./todo.model"

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html"
})
export class TodoComponent {

  @Input() todo!: Todo
  edit: boolean = false;
  @Output() todoDeleted =  new EventEmitter<Todo>();
  @Output() todoSaved =  new EventEmitter<Todo>();
  @ViewChild("editField") editFieldRef!: ElementRef;
  constructor() { }

  toggleTodo() {
    this.todo.completed = !this.todo.completed
  }

  editTodo() {
    this.edit = true
    setTimeout(() => this.editFieldRef.nativeElement.focus(), 100)
    
  }

  saveTodo(e: Event) {
    e.preventDefault();
    if(!this.todo.description.length) {
      this.todoDeleted.emit(this.todo);
    }
    else this.todoSaved.emit();

    setTimeout(() => this.edit = false, 500);
  }

  deleteTodo() {
    console.log("haha");
    this.todoDeleted.emit(this.todo);
  }

  filterText() {
    if(this.todo.description.endsWith('\n')) {
      this.todo.description.slice(0, -1);
    }
  }
}