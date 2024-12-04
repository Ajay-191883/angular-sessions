import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {
  // FormControl - Represents Form input field

  // FormGroup - group of FormControl

  profileForm: any;

  ngOnInit() {
    const firstNameControl = new FormControl('Te', [
      Validators.required,
      Validators.minLength(3),
    ]);

    console.log('nameControl', firstNameControl);

    this.profileForm = new FormGroup({
      firstName: firstNameControl,
      lastName: new FormControl('Kumar'),
      email: new FormControl('test@test.com'),
    });

    console.log('userForm', this.profileForm);
  }

  submitForm() {
    console.log('this.profileForm', this.profileForm.value);
  }

  resetForm() {
    this.profileForm.reset();
  }
}
