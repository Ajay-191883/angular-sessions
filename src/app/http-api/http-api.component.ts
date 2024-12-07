import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from './api.service';
import { CommonService } from '../services/common.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-http-api',
  templateUrl: './http-api.component.html',
  styleUrls: ['./http-api.component.css'],
  providers: [MessageService],
})
export class HttpApiComponent {
  constructor(
    private apiService: ApiService,
    private commonService: CommonService,
    private messageService: MessageService
  ) {}

  payloadData: any = {
    title: 'foo',
    body: 'bar',
    userId: 1,
  };

  postForm: any;

  ngOnInit() {
    // this.loading = true;
    // this.commonService.showLoader();
    this.apiService.GET_ALL_POSTS().subscribe(
      (response: any) => {
        setTimeout(() => {
          // this.loading = false;
          // this.commonService.hideLoader();
          console.log('response', response);
          this.showMessage('success', 'SUCCESS', 'Data fetched successfully');
        }, 2000);
      },
      (error: any) => {
        // this.loading = false;
        // this.commonService.hideLoader();
        this.showMessage('error', 'ERROR', 'Unable to fetch data!');
        console.log('error', error);
      }
    );

    // this.makePostApiCall(this.payloadData);

    this.createForm();
  }

  makePostApiCall(payload: any) {
    console.log('POST API CALL');
    // this.loading = true;
    // this.commonService.showLoader();
    // QUERYPARAMS
    const params = new HttpParams().set('userId', 1);

    this.apiService.SEND_POST(payload, params).subscribe((response) => {
      setTimeout(() => {
        // this.loading = false;
        // this.commonService.hideLoader();
        console.log('response', response);
        this.showMessage('success', 'SUCCESS', 'Data sent successfully');
      }, 2000);
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

  showMessage(severity: any, msgTitle: any, msgDescription: any) {
    this.messageService.add({
      severity: severity,
      summary: msgTitle,
      detail: msgDescription,
    });
  }
}
