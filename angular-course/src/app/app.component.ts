import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Giada Valinotto 5B INFO';

  studentList = [
    {name: 'Ettore Esposito', hobby: 'Karate', gender: 'M', isPro: true},
    {name: 'Paolo Racca', hobby: 'Programmazione', gender: 'M', isPro: false},
    {name: 'Luca Dellavalle', hobby: 'Poligono', gender: 'M', isPro: true},
    {name: 'Bianca Teleman', hobby: 'Cheerleading', gender: 'F', isPro: false},
    {name: 'Martina Velardi', hobby: 'Paddle', gender: 'F', isPro: true},
    {name: 'Andrea Ardizzone', hobby: 'Volley', gender: 'M', isPro: true},
    {name: 'Marta Baudracco', hobby: 'Pesca', gender: 'F', isPro: true},
    {name: 'Michele Ghisolfi', hobby: 'Paddle', gender: 'M', isPro: false},
    {name: 'Giada Valinotto', hobby: 'Skincare', gender: 'F', isPro: true},
    {name: 'Gabriele Leone', hobby: 'Palestra', gender: 'M', isPro: false},
  ]
}
