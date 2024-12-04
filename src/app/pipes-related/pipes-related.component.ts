import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-related',
  templateUrl: './pipes-related.component.html',
  styleUrls: ['./pipes-related.component.css'],
})
export class PipesRelatedComponent {
  obj = {
    name: 'Test',
    age: 45,
  };
}
