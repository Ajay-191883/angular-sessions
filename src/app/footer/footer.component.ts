// import { Component } from '@angular/core';
import { Component, Input } from '@angular/core';
import { MessageService } from '../services/message.service';
import { from, Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  // providers:[MessageService],
})
export class FooterComponent {
  isProjectWorking: boolean = true;
  logicFa() {
    let a = 5;
    let b = 10;
    let c = 20;
    return a * b - c;
  }
  imgSrc: String =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtKfNITg6hINwN837-DUBhvAaRGkdOXAszjw&s';
  @Input() title!: string;
  constructor(
    private messageService: MessageService,
    private http: HttpClient,
    private dataService: DataService
  ) {}

  messageFromService: string = '';
  vowels$ = from(['a', 'e', 'i', 'o', 'u']);
  vowelArr: any = [];
  messageFromHeader: string = '';
  ngOnInit() {
    this.messageFromService = this.messageService.getMessage();
    this.vowels$.subscribe((vowel: string) => {
      this.vowelArr.push(vowel);
    });
    this.callApi();
    this.callApi1();
    this.dataService.dataChanged.subscribe((data: any) => {
      this.messageFromHeader = data;
    });
  }

  callApi() {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
  todos: any = '';
  callApi1() {
    this.http.get('https://jsonplaceholder.typicode.com/todos/').subscribe({
      next: (data: any) => {
        this.todos = data; // Store the response in the `todos` array
        console.log(data); // Log the data for debugging
      },
      error: (err) => {
        console.error('Error occurred:', err); // Handle errors
      },
      complete: () => {
        console.log('API call completed'); // Optional: Log completion
      },
    });
  }
}
