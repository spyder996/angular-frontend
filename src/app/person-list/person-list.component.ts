import { Component, OnInit, ɵsetCurrentInjector } from '@angular/core';
import {Person} from '../person';
import {PersonService} from '../person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons: Person[];

  constructor(private personService: PersonService,
    private router: Router) { }

  ngOnInit(): void {
    this.getPersons();
  }

  private getPersons(){
    this.personService.getPersonsList().subscribe(data => {
      this.persons = data;
    });
  }

  updatePerson(id: number){
   this.router.navigate(['updatePerson', id]);
 }

 deletePerson(id: number){
    this.personService.deletePersonById(id).subscribe(data => {
    this.getPersons();
   });
 }

 personDetails(id: number){
  this.router.navigate(['personDetails', id]);
 }

}
