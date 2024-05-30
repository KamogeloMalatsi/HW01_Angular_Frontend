import { Component, OnInit } from '@angular/core';
import { Course } from '../shared/course';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses:Course[] = []

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.GetCourses()
    console.log(this.courses)
  }

  GetCourses()
  {
    this.dataService.GetCourses().subscribe(result => {
      let courseList:any[] = result
      courseList.forEach((element) => {
        this.courses.push(element)
      });
    })
  }

  deleteCourse(courseId?: number) {
    if (courseId !== undefined) {
      // Call your delete method here
      this.dataService.deleteCourse(courseId).subscribe(result => {
        window.location.reload();
      });
      //console.log('Deleting course with ID:', courseId);
    } else {
      console.error('Course ID is undefined');
    }
  }
  
  /*deleteCourse(courseId: Number){
    this.dataService.deleteCourse(courseId).subscribe(result => {
      window.location.reload();
      });
    }*/
}
