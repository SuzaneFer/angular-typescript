
//primeiro criar uma classe

import { Component } from "@angular/core";

//decorator- passar info adicionais para o compilador
//dentro do component criar meta dados
@Component({
    selector: 'meu-primeiro-component',
    template: '<p> Meu primeiro component com Angular 2! </p>'
})

export class MeuPrimeiroComponent{

}