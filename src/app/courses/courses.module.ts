import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './components/courses/courses.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  {
    path: 'courses',
    component: CoursesComponent
  }
]


@NgModule({
  declarations: [
    CoursesComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class CoursesModule { }
