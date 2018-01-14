import { Stulist } from './stulist';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable()
export class StudentService {
  constructor(private http: HttpClient) { }
  getStudents()
  {
    const url = 'http://localhost:3000';
 return this.http.get<Stulist[]>(url);
  }
  addStudent(nestu)
  {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    const url = 'http://localhost:3000/addstudent';
   const s = JSON.stringify(nestu);
   const m = nestu.name;
   const n = nestu.branch;
   const sd = nestu.age;
     return this.http.post<Stulist[]>(url, {name: m, branch: n, age: sd});
  }
}
