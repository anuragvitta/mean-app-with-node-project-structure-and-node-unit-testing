import { StudentService } from './student.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { FormsModule } from '@angular/forms';
import { AddstudentComponent } from './addstudent/addstudent.component';
@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [StudentlistComponent, AddstudentComponent],
  exports: [StudentlistComponent],
  providers: [ StudentService, AddstudentComponent ]
})
export class StudentsModule { }
