import { Component } from '@angular/core';
import { ServicioNoticiaService } from './Servicios/servicio-noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'noticias-api';
  listadonoticias: any[] = [];
  
  // Aqui vamos a consumir el servicio , para lo que creo el constructor

  constructor(private api:ServicioNoticiaService){}

  buscarnoticias(parametro: any)
  {
    //console.log('Soy el padre');
    //console.log(parametro);

    /* Hay que suscribirse en el servicio y estamos consumiendo el api */

    this.api.getNoticias(parametro).subscribe(resultado=>
      {
        console.log(resultado)
        this.listadonoticias = resultado.articles;
      }
      )
  }

}
