import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent implements OnInit {
  person : Person = new Person();
  constructor(private personService: PersonService, private router: Router) { }

  ngOnInit(): void {
  }

  savePerson(){
    this.personService.createPerson(this.person).subscribe(data => {
      console.log(data);
        }, 
    error => console.log(error));
  }

  goToPersonList(){
    this.router.navigate(['/getAllPersons']);
  }

  onSubmit(){
    this.savePerson();
    this.goToPersonList();
  }

}
