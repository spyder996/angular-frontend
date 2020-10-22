import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { from } from 'rxjs';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-update',
  templateUrl: './person-update.component.html',
  styleUrls: ['./person-update.component.css']
})
export class PersonUpdateComponent implements OnInit {
  id : number;
  person : Person = new Person();

  constructor(private personService:PersonService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.personService.getPersonById(this.id).subscribe(data=>{
      this.person=data;
    },error=> console.log(error));
  }

  onSubmit(){
    this.personService.upadtePersonById(this.id, this.person).subscribe(data => {
    this.goToPersonList();
    },error => console.log(error));
  }

  goToPersonList(){
    this.router.navigate(['getAllPersons']);
  }

}
