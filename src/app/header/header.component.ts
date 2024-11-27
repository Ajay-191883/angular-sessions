import { Component, ViewEncapsulation } from '@angular/core';
import { MessageService } from '../services/message.service';
import { LoginService } from '../services/login.service';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header', // as an element
  // selector: '.header', // as a class
  // selector: '[header]', // as an attribute

  templateUrl: './header.component.html',
  // template: `
  //   <p>header works!</p>
  //   <span>WORKING</span>
  // `,
  styleUrls: ['./header.component.css'],
  // styles: [
  //   `
  //     p {
  //       color: rgb(231, 46, 0);
  //       font-weight: 600;
  //     }
  //   `,
  // ],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HeaderComponent {
  constructor(
    private msgService: MessageService,
    private loginService: LoginService,
    private dataService: DataService,

    private router: Router,
    private route: ActivatedRoute
  ) {}

  currentTime: any = new Date().toLocaleDateString();

  msgFromService: string = '';

  userData: any = null;

  userMsgs: any = [];

  ngOnInit() {
    // MESSAGE
    this.msgFromService = this.msgService.getMessage();

    // LOGIN
    this.userData = this.loginService.login();

    //
    this.msgService.printMsg(this.msgFromService);
  }

  sendMsg() {
    this.dataService.sendData('MESSAGE FROM HEADER');
  }

  goToServicesPage() {
    // this.router.navigateByUrl('/services');
    this.router.navigate(['services/5000']);
  }
  goToClientsPage() {
    this.router.navigateByUrl('/clients');
  }
}
