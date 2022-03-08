import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string='';
  cursos: string[];
  valorAtual: string = ''; 
  valorSalvo: string = '';
  urlImagem = 'http://lorempixel.com/400/200';

  isMouseOver: boolean = false;

  nome: string = 'abc';

  pessoa: any = {
    nome: 'def',
    idade: 20
  }

  botaoClicado(){
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent){
    console.log();
    this.valorAtual = (<HTMLInputElement> evento.target).value;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  constructor(private cursosService: CursosService) {
    this.nomePortal = 'http://loiane.training';

    var servico = new CursosService();

    this.cursos = this.cursosService.getCursos();
   }
   

  ngOnInit(): void {
  }

}
