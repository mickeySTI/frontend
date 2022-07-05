import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CourseListItemModel } from 'src/app/courses/models';
import { selectCourseListModel } from 'src/app/courses/state/course-list.selectors';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  model$!: Observable<CourseListItemModel[]>

  constructor(private store$: Store) { }

  ngOnInit(): void {
    this.model$ = this.store$.select(selectCourseListModel)
  }

}
