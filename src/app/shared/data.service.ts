import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[] = [
    new Todo('this is a test', false),
    new Todo('Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum temporibus omnis totam accusantium soluta maxime at vero vitae non a molestiae voluptatum sequi, dolorem iusto hic doloribus culpa. Quas, at.')
  ];

  constructor() { }

  getAllTodos(){
    return this.todos
  }

  addTodo(todo: Todo){
    this.todos.push(todo)
  }

  updateTodo(index: number, updatedTodo: Todo){
      this.todos[index] = updatedTodo
  }

  deleteTodo(index: number){
    this.todos.splice(index, 1)
  }
}
