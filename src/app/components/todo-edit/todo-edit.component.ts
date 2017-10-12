import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { Itodo } from '../../model/itodo';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {
  todo: Itodo;
  constructor(private todoService: TodoService, private router: ActivatedRoute) { }
  ngOnInit() {
    const todoId: number = parseInt(this.router.snapshot.params['id']);
    this.todoService.getTodo(todoId).subscribe(x => { this.todo = x; });
  }

}
