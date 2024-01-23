import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit {

  @Output() parametroseleccionados = new EventEmitter<any> ();

  categoriaseleccionada = 'juegos';
  paisseleccionado = 'it';
  i = 0;
  
  categorias: any[]=[
    {valor:'general',nombre:'General'},
    {valor:'juegos',nombre:'Juegos'},
    {valor:'entretenimiento',nombre:'Entretenimiento'},
    {valor:'negocios',nombre:'Negocios'}
  ];

  paises: any[]=[
  {valor:'ar',nombre:'Argentina'},
  {valor:'co',nombre:'Colombia'},
  {valor:'it',nombre:'Bolivia'},
  {valor:'jp',nombre:'Uruguay'}
  ];

  buscarnoticia(){
    //console.log(this.categoriaseleccionada)
    //console.log(this.paisseleccionado)
    const parametros = {
     parcategoria: this.categoriaseleccionada,
     parpais : this.paisseleccionado
    }
    this.parametroseleccionados.emit(parametros)
  }

  constructor() {}

  ngOnInit() :void{}

 }
