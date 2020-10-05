import { Component, OnInit, ɵsetCurrentInjector } from '@angular/core';
import {Person} from '../person';
import {PersonService} from '../person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons: Person[];

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.getPersons();
  }

  private getPersons(){
    this.personService.getPersonsList().subscribe(data => {
      this.persons = data;
    });
  }
}
