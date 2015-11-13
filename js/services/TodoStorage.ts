/// <reference path='../_all.ts'/>

module todos {
  'use strict';
  export class TodoStorage implements ITodoStorage {
    STRAGE_ID = 'todo-angularjs-typescript';
    get (): TodoItem[] {
      return JSON.parse(localStorage.getItem(this.STRAGE_ID) || '[]')
    }
    put (todos: TodoItem[]) {
      localStorage.setItem(this.STRAGE_ID, JSON.stringify(todos));
    }
  }
}
