import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  countryList: country[] = [
    {
      countryCode: 1,
      countryName: 'INDIA',
    },
    {
      countryCode: 2,
      countryName: 'CANADA',
    },
    {
      countryCode: 3,
      countryName: 'USA',
    },
    {
      countryCode: 4,
      countryName: 'ENGLAND',
    },
  ];

  @ViewChild('signUpForm') signUpForm!: NgForm;
  userDetails: any = {
    firstname: 'test',
    lastname: 'kumar',
    email: 'test@test.com',
    country: { countryCode: 3, countryName: 'USA' },
    otherDetails: {
      gender: 'male',
      isMarried: true,
    },
  };
  callApiToFetchDetails() {
    const selectedCountry = this.countryList.find(
      (c) => c.countryCode == this.userDetails.country.countryCode
    );
    if (selectedCountry) {
      this.userDetails.country = selectedCountry;
    }
  }

  setValue() {
    this.signUpForm.form.setValue(this.userDetails);
  }

  patchValue() {
    this.signUpForm.form.patchValue({
      firstname: 'UPDATED TEST',
    });
  }

  formSubmitted: boolean = false;

  onSubmitForm() {
    console.log('USER DETAILS', this.userDetails);
    console.log('SIGNUP FORM', this.signUpForm);
    console.log('SIGNUP FORM', this.signUpForm.form);
    console.log('SIGNUP FORMVALUES', this.signUpForm.form.value);
    this.formSubmitted = true;

    if (this.signUpForm.valid) {
      // API CALL SEND PAYLOAD
    }
  }

  onResetForm() {
    this.formSubmitted = false;
    this.signUpForm.reset();
  }
}

type country = {
  countryCode: number;
  countryName: string;
};
