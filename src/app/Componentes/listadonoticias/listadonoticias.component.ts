import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listadonoticias',
  templateUrl: './listadonoticias.component.html',
  styleUrl: './listadonoticias.component.css'
})
export class ListadonoticiasComponent implements OnInit{

  @Input() listado:any;

  constructor() {}

  ngOnInit(): void {
    
  }
}
