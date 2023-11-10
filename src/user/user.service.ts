import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getList(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getById(id: number | string | null): Observable<User> {
    return this.http.get<User>(this.apiUrl + '/' + id);
  }

}
