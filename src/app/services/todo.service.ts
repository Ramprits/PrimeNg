import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Itodo } from '../model/itodo';

@Injectable()
export class TodoService {
  constructor(private http: Http) { }
  getTodos(): Observable<Itodo[]> {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos`)
      .map((response: Response) => response.json());
  }
  getTodo(id: number): Observable<Itodo> {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .map((response: Response) => response.json());
  }
}

