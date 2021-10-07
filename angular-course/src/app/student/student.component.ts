import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
studentList=[
  {name: 'Ettore Esposito', hobby: 'Karate', gender: 'M'},
  {name: 'Paolo Racca', hobby: 'Programmazione', gender: 'M'},
  {name: 'Luca Dellavalle', hobby: 'Poligono', gender: 'M'},
  {name: 'Bianca Teleman', hobby: 'Cheerleading', gender: 'F'},
  {name: 'Martina Verlardi', hobby: 'Paddle', gender: 'F'},
  {name: 'Andrea Ardizzone', hobby: 'Gaming', gender: 'M'},
  {name: 'Marta Baudracco', hobby: 'Pesca', gender: 'F'},
  {name: 'Michele Ghisolfi', hobby: 'Paddle', gender: 'M'},
  {name: 'Giada Valinotto', hobby: 'Skincare', gender: 'F'},
  {name: 'Gabriele Leone', hobby: 'Palestra', gender: 'M'},
];
student : any = {};
  constructor() {
    let num = Math.floor(Math.random()*this.studentList.length);
    this.student= this.studentList[num];
  }

  ngOnInit(): void {
  }

}
