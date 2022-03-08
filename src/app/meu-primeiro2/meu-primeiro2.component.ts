import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-primeiro2',
  templateUrl: './meu-primeiro2.component.html',
  styleUrls: ['./meu-primeiro2.component.css']
})
export class MeuPrimeiro2Component implements OnInit {

  nomeDoCurso: string='Angular';

  nome: string = 'abc';

  valorInicial = 15;

  onMudouValor(evento: KeyboardEvent){
    console.log(evento);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
