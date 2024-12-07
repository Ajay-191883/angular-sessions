import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  GET_ALL_POSTS() {
    return this.http.get('https://jsonplaceholder.typicod.com/todos/').pipe(
      catchError((error: any) => {
        console.error('Error occured: ', error);
        return throwError(
          () => new Error('ERROR WHILE FETCHING POSTS | STATUS 404')
        );
      })
    );
  }

  SEND_POST(payload: any, params: any) {
    // HEADERS
    return this.http.post(
      'https://jsonplaceholder.typicode.com/posts',
      JSON.stringify(payload),
      { params }
    );
  }
}
