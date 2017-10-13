import { Component, OnInit, Version, VERSION } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { Itodo } from '../../model/itodo';
import { LoggerService } from '../../services/logger.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {
  todo: Itodo;
  constructor(private todoService: TodoService,
    private router: ActivatedRoute,
    private logger: LoggerService, private title: Title
  ) {

  }
  ngOnInit() {
    this.title.setTitle(`Edit Todo`)
    const todoId: number = parseInt(this.router.snapshot.params['id']);
    this.todoService.getTodo(todoId).subscribe(x => { this.todo = x; },
      err => console.log(err),
      () => this.logger.log('sucessfully '));

  }



}
