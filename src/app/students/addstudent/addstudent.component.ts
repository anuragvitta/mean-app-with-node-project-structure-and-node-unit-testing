import { Student } from './../student';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from './../student.service';
import { Stulist } from './../stulist';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
student: Student= new Student();
  constructor(private stuservice: StudentService,private router:Router) { }

  ngOnInit() {
  }
  show(studentv: NgForm)
  {
    this.stuservice.addStudent(studentv).subscribe(response => {
      //console.log(response);
      this.router.navigate(['/']);
    });
  }
}
