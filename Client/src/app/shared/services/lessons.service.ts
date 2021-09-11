import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {
  private lessons = [
    { title: 'Angular' },
    { title: 'React' },
    { title: 'Svelte' },
    { title: 'React-native!!' },
    { title: 'Django' },
    { title: 'Laravel' },
    { title: 'Symphony' },
  ];
  constructor() { }

  all() {
    return this.lessons
  }
}
