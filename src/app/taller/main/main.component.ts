import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  lista:any= new Array;
  tarea:string="";
  descripcion:string ="";
  error:string = "complete los campos por favor";
  valor:any=true;
  habilitar(){
    if(this.tarea =="" || this.descripcion ==""){
      return this.valor = true;
    }else{
      return this.valor = false;
    }
  }
  Agregar(){
    if(this.tarea !=="" && this.descripcion !== ""){
          this.lista.push({'tarea':this.tarea,'descripcion':this.descripcion});
          this.tarea="";
          this.descripcion="";
    }else{
      document.write ( this.error);
    }
  }
  Eliminar(indice:number) {
    this.lista.splice(indice, 1);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
