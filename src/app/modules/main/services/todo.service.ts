import { Injectable } from '@angular/core';
import { TodoItem } from '../../../types';
import data from '../../../../data'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  todoItems: Array<TodoItem> = data;

  getTodos(): Array<TodoItem> {
    return this.todoItems
  }

  addTodo(newTodo: TodoItem): Array<TodoItem> {
    this.todoItems = [newTodo, ...this.todoItems];
    return this.todoItems;
  }

  editTodo(id: string, newTodo: TodoItem): Array<TodoItem> {
    this.todoItems = this.todoItems.map((item) => item.id === id ? newTodo : item);
    return this.todoItems;
  }

  deleteTodo(id: string): Array<TodoItem> {
    this.todoItems = this.todoItems.filter((item) => item.id !== id);
    return this.todoItems;
  }
}
