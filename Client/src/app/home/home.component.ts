import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Your fav framework courses';
  currentLesson = null;

  courseLessons = [
    { title: 'Angular' },
    { title: 'React' },
    { title: 'Svelte' },
    { title: 'React-native' },
    { title: 'Laravel' },
    { title: 'Symphony' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selectLesson(lesson) {
    console.log('SELECT LESSON FIRED!', lesson);
    this.currentLesson = lesson;
  }
}
