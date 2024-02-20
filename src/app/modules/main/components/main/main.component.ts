import { Component } from '@angular/core';
import { TodoFormComponent } from '../todo-components/todo-form/todo-form.component';
import { TodoItemComponent } from '../todo-components/todo-item/todo-item.component';
import { TodoListComponent } from '../todo-components/todo-list/todo-list.component';
import { TodoService } from '../../services/todo.service';
import { TodoItem } from '../../../../types';
import data from '../../../../../data';

@Component({
  selector: 'main-root',
  standalone: true,
  imports: [TodoFormComponent, TodoItemComponent, TodoListComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  providers: [TodoService]
})
export class MainComponent {
  constructor(private todoService: TodoService) { }
  todoItems!: Array<TodoItem>

  createTodo(event: TodoItem) {
    this.todoItems = this.todoService.addTodo(event)
  }

  editTodo(event: TodoItem) {
    console.log(event);
  }

  deleteTodo(event: TodoItem) {
    console.log(event);
  }

  ngOnInit() {
    this.todoItems = this.todoService.getTodos();
  }
}
