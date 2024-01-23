import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioNoticiaService {

  constructor(private http:HttpClient) { }
  
  // Este es un método que devuelve un observable de tipo any , por eso se incluye el return 
  
  getNoticias(parametros:  any): Observable<any>
  {
    const URL = 'https://newsapi.org/v2/top-headlines?country='+parametros.parpais+'&category='+parametros.parcategoria+'&apiKey=013ec5f52b13415b934c803ceea051c7';
      return this.http.get(URL);
  }
}
