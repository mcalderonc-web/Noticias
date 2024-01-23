import { Component, Input, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrl: './barra.component.css'
})
export class BarraComponent implements OnInit{

  @Input() titulo: string;
  
  constructor() { 
    this.titulo = '';
  }
  
  ngOnInit(): void {
    
  }

}
