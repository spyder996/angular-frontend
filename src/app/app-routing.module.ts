import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonListComponent } from './person-list/person-list.component';
import { CreatePersonComponent } from './create-person/create-person.component';
import { PersonUpdateComponent } from './person-update/person-update.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path:'', redirectTo:'getAllPersons', pathMatch:'full'},
  {path: "getAllPersons", component:PersonListComponent},
  {path: "addPerson", component:CreatePersonComponent},
  {path: 'updatePerson/:id',component:PersonUpdateComponent},
  {path: 'personDetails/:id',component:PersonDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
