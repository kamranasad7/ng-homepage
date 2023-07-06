import { Component, Input } from "@angular/core"
import { Todo } from "./todo.model"

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html"
})
export class TodoComponent {

  @Input() todo!: Todo
  constructor() { }

  toggleTodo(todo: Todo) {
    todo.completed = !todo.completed
  }
}