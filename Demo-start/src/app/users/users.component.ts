import { Component, OnInit } from '@angular/core';
import { Users } from './users';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = new Users();

  constructor() { }

  ngOnInit() {
  }
  save(userForoms: NgForm) {
    console.log(userForoms.form);
    console.log('Saved: ' + JSON.stringify(userForoms.value));
  }

}
