import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private commonService: CommonService,
    private cdr: ChangeDetectorRef
  ) {}

  title = 'angular-app';
  theme = 'Dark';

  loading: boolean = true;

  ngOnInit() {
    this.commonService.isLoading.subscribe((isLoading: any) => {
      this.loading = isLoading;
    });
  }

  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }
}
