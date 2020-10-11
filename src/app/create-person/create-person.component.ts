import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent implements OnInit {
  person : Person = new Person();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.person);
  }

}
