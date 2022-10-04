import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  operacao = '';
  resultado = '';
  ultimoValor = '';

  constructor() {}

  adicionarValor(valor: string){

    if(this.operacao !== ''){
      this.ultimoValor = this.operacao[this.operacao.length-1];
    }

    if(valor === '/' || valor === '*' || valor === '-'|| valor === '+' || valor === '.'){
      if( this.operacao === '' ||this.ultimoValor === '/' || this.ultimoValor === '*'||
      this.ultimoValor === '-'|| this.ultimoValor === '+' || this.ultimoValor === '.' ){
        return;
      }
    }
    this.operacao += valor;
  }

  limparOperacao(){
    this.operacao = '';
  }

  limparMemoria(){
    this.resultado = '';
    this.operacao = '';
  }

  apagarCaracter(){
    if(this.operacao.length > 0){
      this.operacao = this.operacao.substring(0,this.operacao.length-1);
    }
  }

  calcularResultado(){

  }

}
