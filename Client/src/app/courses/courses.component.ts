import { Component, OnInit } from '@angular/core';
import { CoursesService } from './../shared/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  selectedCourse = null;
  courses = null

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.resetSelectedCourse();
    this.loadCourses();
  }

  resetSelectedCourse(){
    const emptyCourse = {
      id:null,
      title:'',
      description: '',
      percentComplete: 0,
      favorite: false
    }
    this.selectedCourse = emptyCourse
  }

  selectCourse(course) {
    this.selectedCourse = course;
  }

  deleteCourse(courseId) {
    this.coursesService.delete(courseId)
      .subscribe(result => this.loadCourses())
  }

  loadCourses(){
    this.coursesService.all()
      .subscribe( courses => this.courses = courses )
  }

  saveCourse(course) {
    if(course.id) {
      this.coursesService.update(course)
        .subscribe(result => this.refreshCourses())
    } else {
      this.coursesService.create(course)
        .subscribe(result=> this.refreshCourses())
    }
  }

  refreshCourses(){
    this.resetSelectedCourse();
    this.loadCourses();
  }

  cancel() {
    this.resetSelectedCourse();
  }
}
