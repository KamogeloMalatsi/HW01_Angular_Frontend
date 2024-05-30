import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Course } from '../shared/course';


@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.scss'
})
export class AddCourseComponent implements OnInit {
  
  courseForm = new FormGroup(
    {
        name: new FormControl(''),
        duration: new FormControl(''),
        description: new FormControl('')
    })
  
    constructor(private dataService: DataService, private router: Router) { }
  
    ngOnInit(): void {
    }
  
    cancel(){
      this.router.navigate(['/courses'])
    }
  

    onSubmit() {
      const courseFormValue = this.courseForm.value;
      const courseData: Course = {
          name: courseFormValue.name || '',
          duration: courseFormValue.duration || '',
          description: courseFormValue.description || ''
        };

      this.dataService.addCourse(courseData).subscribe(() => {
        this.router.navigate(['/courses']);
      });
    }
    
    /*onSubmit(){
      this.dataService.addCourse(this.courseForm.value).subscribe(result => {
            this.router.navigate(['/courses'])
      })
    }*/

}
