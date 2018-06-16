import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('http://localhost:8080/Users/listUsers');
  }
  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  getOnePost(id: number) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id) ;
  }
  getOne(id: number) {
    return this.http.get('http://localhost:8080/Users/' + id);
  }

  deleteOne(id: number) {
    return this.http.delete('http://localhost:8080/Users/' + id);
  }
}
