import { StudentService } from './../student.service';
import { Stulist } from './../stulist';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
students: Stulist[];
  constructor(private stuservice: StudentService) {
  this.stuservice.getStudents().subscribe(response => {
    this.students = response;
     //console.log(this.students);
  });
   }

  ngOnInit() {
  }

}
