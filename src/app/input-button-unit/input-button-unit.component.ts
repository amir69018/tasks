import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello world';

  constructor(){
    // setTimeout(() => {
    //   this.title = 'This is not the title you are looking for';
    // }, 3000);
  }
  ngOnInit(): void {
  }
  
  generateTitle(): string {
    return 'This title was generated by a method.';
  }

  changeTitle(newTitle: string) {
    console.log(newTitle);
    this.title = newTitle;
  }
  getInputValue(event: Event) {
    return (event.target as HTMLInputElement).value; 
  }
}