import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }
  //injeção de dependencia
  

  getCursos(){
    return ['Java','Extr JS', 'Angular'];
  }
}
