import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { Course } from '../shared/course';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = 'https://localhost:7049/api/'

  httpOptions ={
    headers: new HttpHeaders({
      ContentType: 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { 
  }

  GetCourses(): Observable<any>{
    return this.httpClient.get(`${this.apiUrl}Course/GetAllCourses`)
    .pipe(map(result => result))
  }

  getCourse(courseId: number) {
    return this.httpClient.get(`${this.apiUrl}Course/GetCourse`+"/"+courseId)
    .pipe(map(result => result))
  }

  editCourse(courseId: number, course: Course) {
    return this.httpClient.put(`${this.apiUrl}Course/EditCourse/${courseId}`,course, this.httpOptions)

  }

  addCourse(course: Course):Observable<Course> {
   return this.httpClient.post<Course>(`${this.apiUrl}Course/AddCourse`, course, this.httpOptions)
  }
  
  deleteCourse(courseId: number | undefined) {
    if (courseId !== undefined) {
      return this.httpClient.delete<string>(`${this.apiUrl}Course/DeleteCourse`+ "/" + courseId, this.httpOptions);
    } else {
      throw new Error("Course ID is undefined");
    }
  }

  /*deleteCourse(courseId: Number) {
    return this.httpClient.delete<string>(`${this.apiUrl}Course/DeleteCourse`+ "/" + courseId, this.httpOptions)
  }*/

}


