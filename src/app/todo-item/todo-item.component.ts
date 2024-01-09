import { Component, Input, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  //templateUrl: './todo-item.component.html',
  template: `
    {{ item.title }}
  `,
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Input() item: any; //TODO: change this to TodoItem object instead later.

}
