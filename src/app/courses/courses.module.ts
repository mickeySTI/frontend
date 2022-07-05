import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './components/courses/courses.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/courses/register/register.component';
import { ListComponent } from './components/courses/list/list.component';
import { StoreModule } from '@ngrx/store';


const routes: Routes = [
  {
    path: 'courses',
    component: CoursesComponent
  }
]


@NgModule({
  declarations: [
    CoursesComponent,
    RegisterComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature("courses feature", {})
  ],
  exports:[RouterModule]
})
export class CoursesModule { }
