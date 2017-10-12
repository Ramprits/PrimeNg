import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Itodo } from '../../model/itodo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Itodo[];
  constructor(private todoServices: TodoService) { }
  ngOnInit() {
    this.todoServices.getTodos().subscribe(x => { this.todos = x; })
  }

}
