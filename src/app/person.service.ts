import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Person } from "./person";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private baseUrl="http://localhost:8080/api/v1/getAllPersons";

  constructor(private httpClient: HttpClient) { }

  getPersonsList(): Observable<Person[]>{
    return this.httpClient.get<Person[]>(`${this.baseUrl}`);
  }
}
