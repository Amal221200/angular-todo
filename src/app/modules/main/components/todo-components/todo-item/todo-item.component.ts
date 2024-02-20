import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../../../../../types';
import { CapitalizePipe } from '../../../../../pipes/capitalize.pipe';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CapitalizePipe],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  @Input() todoItem!: TodoItem

  @Output() editTodo : EventEmitter<TodoItem> = new EventEmitter();
  @Output() deleteTodo : EventEmitter<TodoItem> = new EventEmitter();

  
}
