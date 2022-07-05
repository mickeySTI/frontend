import { createSelector } from "@ngrx/store";
import { CourseListItemModel } from "../models";

export const selectCourseListModel = createSelector(
  () => {
    return [
      {
        id: '1',
        title: 'Angular State Management',
        description: 'Manage all the state!',
        numberOfDays: 3,
        hasOfferings: true
      },
      {
        id: '2',
        title: 'Angular Advanced State Management',
        description: 'Manage all the state advancely!',
        numberOfDays: 3,
        hasOfferings: true
      },
      {
        id: '3',
        title: 'Event Driven Services',
        description: 'Kafkaesque Services FTW',
        numberOfDays: 3,
        hasOfferings: false
      }
    ] as CourseListItemModel[]
  }
)




