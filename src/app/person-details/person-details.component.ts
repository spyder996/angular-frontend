import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Person } from '../person';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from '../person.service'

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  id: number;
  person: Person;
  constructor(private route: ActivatedRoute, private personService: PersonService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.person = new Person();
    this.personService.getPersonById(this.id).subscribe( data =>{
    this.person = data;
    });
  }

}
