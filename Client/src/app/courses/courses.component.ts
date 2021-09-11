import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  // CHALLENGE
  // STEP 01: Display courses using ngFor
  // STEP 02: Add event handler to select course
  // STEP 03: Display raw json of selected course
  selectedCourse = null;

  courses = [
    {
      id: 1,
      title: 'Angular',
      description: 'Js based framework',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'React native',
      description: 'JS based mobile framework',
      percentComplete: 90,
      favorite: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selectCourse(course) {
    this.selectedCourse = course;
  }

  deleteCourse(courseId) {
    console.log('COURSE DELETED!', courseId);
  }
}
