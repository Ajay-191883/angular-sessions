import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  imgSrc: string = 'https://www.w3schools.com/html/pic_trulli.jpg';
  imgSrc1: string = 'https://www.w3schools.com/html/pic_trulli.jpg';
  imgSrc2: string = 'https://www.w3schools.com/html/img_girl.jpg';

  msg: string = this.imgSrc;

  changeImgSrc(event: any, param1: any) {
    console.log('event', event);
    this.imgSrc = this.imgSrc == this.imgSrc1 ? this.imgSrc2 : this.imgSrc1;

    this.msg = this.imgSrc;

    //  CONDITIONAL OPERATOR
    let max = 0;

    let a = 2;
    let b = 5;

    max = a > b ? a : b;

    console.log('max', max);

    console.log('imgSrc', this.imgSrc);
    console.log('imgSrc2', this.imgSrc2);
  }

  // TWO_WAY  - FROM TS & FROM INPUT
  userInput: string = 'red';

  // DIRECTIVES

  // ngIf

  isEditor: any = true;

  divColor: string = 'blue';

  numberArray: any = [1, 2, 3, 4, 5];

  objArray: any = [
    { a: 1, b: 2 },
    { a: 3, b: 4 },
    { a: 5, b: 6 },
  ];

  FULL_NAME: string = 'ABCD';

  taskUpdateFromChild: string = 'PENDING';

  pageTitle: any = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log('::MAIN ONLOAD MAIN PAGE');
    console.log('::MAIN ROUTE INFO', this.route);

    this.route.data.subscribe((data: any) => {
      console.log('::MAIN DATA ROUTE', data);
      this.pageTitle = data.pageTitle;
    });
    this.route.params.subscribe((param: any) => {
      console.log('::MAIN PARAM ROUTE', param);
    });

    // PARAM, QUERYPARAM, FRAGMENT, DATA
  }

  updateTaskValue(updatedValue: any) {
    this.taskUpdateFromChild = updatedValue;
  }
}
