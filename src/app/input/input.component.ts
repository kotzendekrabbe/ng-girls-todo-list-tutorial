import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  title: string = '';

  @Output() submit: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  changeTitle(newTitle: string): void {
    this.submit.emit(newTitle);
  }

  ngOnInit() {
  }
}
