import { Component } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { TodoListService } from '../services/todo-list.service';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent {
  todoList: TodoItem[];

  constructor(private todoListService: TodoListService) { 
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(title: string) {
    const item: TodoItem = {title}
    this.todoListService.addItem(item);
  }
  removeItem(item: TodoItem) {
    this.todoListService.deleteItem(item);
  }
  updateItem(item: TodoItem, changes: TodoItem) {
    this.todoListService.updateItem(item, changes);
  }
}
