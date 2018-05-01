import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { InputComponent } from './input/input.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
import { TodoListService } from './todo-list.service';
import { TodoListStorageService } from './todo-list-storage.service'


@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    InputComponent,
    ListManagerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TodoListService, TodoListStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
