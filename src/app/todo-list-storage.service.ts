import { Injectable } from '@angular/core';

const storageName = 'aah_todo_list';

const defaultList = [
  {title: '🦀 🚆 😺'},
  {title: '🦀 🤗 😺'},
  {title: '🦀 💋 😺'},
  {title: '🦀 🏠 😺'},
  {title: '🦀 💏 😺'},
  {title: '🦀 🤟 😺'},
  {title: '🦀 🍸 😺'},
  {title: '🦀 💖 😺'}
];

@Injectable()
export class TodoListStorageService {

  private todoList;

  constructor() {
    this.todoList = JSON.parse(localStorage.getItem(storageName)) || defaultList;
  }

  // Get items
  get() {
    return [...this.todoList];
  }

  // Add a new item
  post(item) {
    this.todoList.push(item);
    return this.update();
  }

  // Update an item
  private update() {
    localStorage.setItem(storageName, JSON.stringify(this.todoList));

    return this.get();
  }

  private findItemIndex(item) {
    return this.todoList.indexOf(item);
  }

  put(item, changes) {
    Object.assign(this.todoList[this.findItemIndex(item)], changes);
    return this.update();
  }

  // Remove an item
  destroy(item) {
    this.todoList.splice(this.findItemIndex(item), 1);
    return this.update();
  }

}
