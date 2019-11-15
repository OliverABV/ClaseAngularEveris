import { Component, OnInit } from '@angular/core';
import { Prueba02Service } from '../servicio/prueba02.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent implements OnInit {
  //para la creacion de traer a las tablas
  condicional :boolean
  varTest: 6
  var: String
  comentarios;



  constructor(
    public prueba02: Prueba02Service
  ) {
    this.condicional = true; // para usar en la tabla
  }

 /* ngOnInit() {
    this.prueba02.llamame().subscribe(
      (data) =>{
        console.log(data);
      }
    );*/
     ngOnInit() {
       const response =this.prueba02.llamame().subscribe(
         (data) =>{
           console.log(data);
           this.comentarios=data;
         }
         )
       console.log(response);

      }

  }

