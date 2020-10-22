import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Person } from "./person";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private baseUrl="http://localhost:8080/api/v1/getAllPersons";
  private addPersonUrl ="http://localhost:8080/api/v1/addPerson";
  private getPersonId ="http://localhost:8080/api/v1/getPersonById";
  private updatePerson = "http://localhost:8080/api/v1/updatePerson"; 
  private deletePerson= "http://localhost:8080/api/v1/deletePerson"; 

  constructor(private httpClient: HttpClient) { }

  getPersonsList(): Observable<Person[]>{
    return this.httpClient.get<Person[]>(`${this.baseUrl}`);
  }

  createPerson(person: Person): Observable<Object>{
    return this.httpClient.post(`${this.addPersonUrl}`, person);
  }

  getPersonById(id: number): Observable<Person>{
    return this.httpClient.get<Person>(`${this.getPersonId}/${id}`);
  }

  upadtePersonById(id:number, person:Person): Observable<object>{
    return this.httpClient.put(`${this.updatePerson}/${id}`, person);
  }
  deletePersonById(id:number):Observable<object>{
    return this.httpClient.delete(`${this.deletePerson}/${id}`);
  }
}