export class Todo {
  description: string = ""
  completed: boolean = false

  constructor(description: string, completed: boolean = false) {
    this.description = description
    this.completed = completed
  }
}