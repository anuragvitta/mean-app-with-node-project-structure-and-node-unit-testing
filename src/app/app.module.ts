import { StudentlistComponent } from './students/studentlist/studentlist.component';
import { StudentsModule } from './students/students.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddstudentComponent } from './students/addstudent/addstudent.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, StudentsModule, HttpClientModule, FormsModule,
    RouterModule.forRoot([
      {path: 'students', component: StudentlistComponent},
      {path: 'addstudents', component: AddstudentComponent},
      {path: '', component: StudentlistComponent},
      {path : '**', redirectTo: '/', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
