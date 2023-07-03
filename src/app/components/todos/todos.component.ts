import { Component } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todos!: Todo[];

  inputTodo: string = '';

  constructor() {
    this.todos = [
      { content: 'First Todo', complete: false },
      { content: 'Second Todo', complete: false },
    ];
  }
  toggleDone(id: number): void {
    this.todos.map((v, i) => {
      if (i === id) {
        v.complete = !v.complete;
      }
      return v;
    });
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo() {
    this.todos.push({ content: this.inputTodo, complete: false });
    this.inputTodo = '';
  }
}
