import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  // numberArray: any = [];

  // @ViewChild('childInput') childInput!: ElementRef;

  // @Input() childNumberArray: any = [];

  // @Input() childMsgFromParent: string = '';

  // @Input() childObjFromParent: any = null;

  // @Output() taskUpdate = new EventEmitter<string>();

  // sendTaskUpdate() {
  //   this.taskUpdate.emit('COMPLETE');
  // }

  // showValue: string = '';

  // focusInput() {
  //   this.childInput.nativeElement.style.backgroundColor = 'lightblue';
  // }

  //OnInit
  ngOnInit(): void {}

  // ngAfterViewInit() {
  //   this.focusInput();
  // }
}
