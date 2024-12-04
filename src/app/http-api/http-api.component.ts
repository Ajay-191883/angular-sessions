import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-http-api',
  templateUrl: './http-api.component.html',
  styleUrls: ['./http-api.component.css'],
})
export class HttpApiComponent {
  constructor(private http: HttpClient) {}

  payloadData: any = {
    title: 'foo',
    body: 'bar',
    userId: 1,
  };

  postForm: any;

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/todos/').subscribe(
      (response: any) => {
        console.log('response', response);
      },
      (error: any) => {
        console.log('error', error.message);
      }
    );

    this.makePostApiCall(this.payloadData);

    this.createForm();
  }

  makePostApiCall(payload: any) {
    console.log('POST API CALL');

    // HEADERS
    const headers = new HttpHeaders({
      Authorization: 'Token',
    });

    // QUERYPARAMS
    const params = new HttpParams().set('userId', 1);

    this.http
      .post(
        'https://jsonplaceholder.typicode.com/posts',
        JSON.stringify(payload),
        { headers, params }
      )
      .subscribe((response) => {
        console.log('response', response);
      });
  }

  createForm() {
    this.postForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),
      userId: new FormControl(''),
    });
  }

  resetForm() {
    this.postForm.reset();
  }

  submitForm() {
    console.log(this.postForm.value);
    this.makePostApiCall(this.postForm.value);
  }
}
