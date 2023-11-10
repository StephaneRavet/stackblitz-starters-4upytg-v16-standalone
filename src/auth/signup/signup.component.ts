import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  // username = '';
  // email = '';
  // password = '';

  constructor() {}

  ngOnInit() {}

  signup() {
    console.log('OKOK');
  }
}
