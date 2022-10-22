import { AlertController } from '@ionic/angular';
import { IMemoria } from './../models/IMemoria.model';
import { Component } from '@angular/core';
import { evaluate } from 'mathjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  operacao = '';
  resultado = '';
  ultimoValor = '';
  //numero = false;
  //caracter = true;
  caracteres = ['.', '/', '*', '+', '-'];

  memoria: IMemoria[] = [];

  constructor(private alertController: AlertController) {}

  adicionarMemoria() {
    if (this.operacao !== '' && this.resultado !== '') {
      const memoria: IMemoria = {
        operacao: this.operacao,
        resultado: Number(this.resultado),
      };

      this.memoria.push(memoria);
    } else if (this.operacao !== '' && this.resultado === '') {
      this.calcularResultado();
      const memoria: IMemoria = {
        operacao: this.operacao,
        resultado: Number(this.resultado),
      };

      this.memoria.push(memoria);
    } else {
      this.presentAlert('Erro', 'Não tem nada para salvar!');
    }

    console.log(this.memoria);
  }

  adicionarValor(valor: string) {
    if (this.operacao !== '') {
      this.ultimoValor = this.operacao[this.operacao.length - 1];
    }

    if (this.caracteres.includes(valor)) {
      if (this.operacao === '' || this.caracteres.includes(this.ultimoValor)) {
        return;
      }
    }

    this.operacao += valor;
  }

  /*
  adicionarValor(valor: string){
    this.caracter = this.caracteres.includes(valor);

    if(!this.caracter){
      this.operacao += valor;
      this.numero = true;
    }else if(this.caracter && this.numero){
      this.operacao += valor;
      this.numero = false;
    }
  }*/

  limparOperacao() {
    this.operacao = '';
    //this.numero = false;
  }

  limparMemoria() {
    this.resultado = '';
    this.operacao = '';
    //this.numero = false;
    this.memoria = [];
  }

  apagarCaracter() {
    if (this.operacao.length > 0) {
      this.operacao = this.operacao.substring(0, this.operacao.length - 1);
    }
  }

  calcularResultado() {
    try {
      this.resultado = evaluate(this.operacao);
    } catch (err) {
      this.resultado = 'Inválido!';
    }
  }

  mostrarMemoria() {}

  somarMemoria() {}

  subtrairMemoria() {}

  async presentAlert(titulo: string, mensagem: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensagem,
      buttons: ['OK'],
    });

    alert.present();
  }
}
