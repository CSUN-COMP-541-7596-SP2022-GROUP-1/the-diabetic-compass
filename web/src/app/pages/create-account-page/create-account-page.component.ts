import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account-page',
  templateUrl: './create-account-page.component.html',
  styleUrls: ['./create-account-page.component.css'],
})
export class CreateAccountPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
