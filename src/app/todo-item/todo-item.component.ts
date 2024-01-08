import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  //templateUrl: './todo-item.component.html',
  template: `
    {{ item.title }}
  `,
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
@Input() item: any; 

}
