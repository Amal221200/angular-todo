import { Component, Output, Input, EventEmitter } from '@angular/core';
import { TodoItem } from '../../../../../types';
import { FormBuilder, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss'
})
export class TodoFormComponent {
  constructor(private formBuilder: FormBuilder) { }
  @Output() addTodo: EventEmitter<TodoItem> = new EventEmitter<TodoItem>()


  todoForm = this.formBuilder.group({
    task: ['', Validators.required]
  })

  handleSubmit() {
    if (!this.todoForm.valid) {
      return
    }

    const newTodo: TodoItem = {
      id: crypto.randomUUID(),
      task: this.todoForm.value.task || '',
      action: 'incomplete'
    };

    this.addTodo.emit(newTodo);
  }
}
