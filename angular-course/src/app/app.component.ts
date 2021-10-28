import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';
import { StudentComponent } from './student/student.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  @ViewChild("txtName") txtName !: ElementRef;
  title = 'Giada Valinotto 5B';

  studentList = [
    // {name:'Ettore Esposito', hobby:'karate', gender:'M', isPro: false},
    // {name:'Luca Pellissero',hobby:'paddle',gender:'M', isPro: false},
    {name:'Luca Dellavalle',hobby:'volley',gender:'M', isPro: false},
    {name:'Bianca Teleman', hobby:'Karate', gender:'F', isPro: false},
    {name:'Giada Valinotto',hobby:'paddle',gender:'F', isPro: false},
    {name:'Samuele De Toffol',hobby:'volley',gender:'M', isPro: false},
    // {name:'Gabriele Leone', hobby:'Karate', gender:'M', isPro: false},
    {name:'Martina Velardi',hobby:'paddle',gender:'F', isPro: false},
    // {name:'Alberto Savoldelli',hobby:'volley',gender:'M', isPro: false},
  ]
  hobbies = ['karate','paddle','volley','golf','tennis','programming', 'basket'];
  //studentList:any[]=[]
  studentName:string = "";
  studentGender: string="M";
  studentHobby : string="";

  onCreateStudent(){
    let newStudent={name:this.studentName, hobby:this.studentHobby,"gender":this.studentGender, isPro: false};
    this.studentList.push(newStudent);
    this.studentName="";
    console.log(this.studentList);
  }
  onDeleteStudent(student:any){
    this.studentList.splice(this.studentList.indexOf(student),1);
  }
}
