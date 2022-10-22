import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  valor1 = '';
  valor2 = '';
  resultado = '';
  conta = '';

  constructor(private alertController: AlertController) {}

  async soma() {
    const soma = parseFloat(this.valor1) + parseFloat(this.valor2);

    let msg = '<p><b>Valor 1: </b>' + this.valor1 + '</p>';
    msg += `<p><b>Valor 2: </b> ${this.valor2} </p>`;
    msg += `<p><b>Resultado: </b> ${soma} </p>`;

    const alert = await this.alertController.create({
      header: 'RESULTADO',
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();
    this.mostrarResultadoConta(soma, 'Adição');
  }

  async subtrair() {
    const subtrair = parseFloat(this.valor1) - parseFloat(this.valor2);

    let msg = '<p><b>Valor 1: </b>' + this.valor1 + '</p>';
    msg += `<p><b>Valor 2: </b> ${this.valor2} </p>`;
    msg += `<p><b>Resultado: </b> ${subtrair} </p>`;

    const alert = await this.alertController.create({
      header: 'RESULTADO',
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();
    this.mostrarResultadoConta(subtrair, 'Subtração');
  }

  async multiplicar() {
    const mult = parseFloat(this.valor1) * parseFloat(this.valor2);

    let msg = '<p><b>Valor 1: </b>' + this.valor1 + '</p>';
    msg += `<p><b>Valor 2: </b> ${this.valor2} </p>`;
    msg += `<p><b>Resultado: </b> ${mult} </p>`;

    const alert = await this.alertController.create({
      header: 'RESULTADO',
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();
    this.mostrarResultadoConta(mult, 'Multiplicação');
  }

  async dividir() {
    const dividir = parseFloat(this.valor1) / parseFloat(this.valor2);

    let msg = '<p><b>Valor 1: </b>' + this.valor1 + '</p>';
    msg += `<p><b>Valor 2: </b> ${this.valor2} </p>`;
    msg += `<p><b>Resultado: </b> ${dividir} </p>`;

    const alert = await this.alertController.create({
      header: 'RESULTADO',
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();
    this.mostrarResultadoConta(dividir, 'Divisão');
  }

  async maior() {
    let maior;
    if (parseFloat(this.valor1) > parseFloat(this.valor2)) {
      maior = parseFloat(this.valor1);
    } else {
      maior = parseFloat(this.valor2);
    }

    let msg = '<p><b>Valor 1: </b>' + this.valor1 + '</p>';
    msg += `<p><b>Valor 2: </b> ${this.valor2} </p>`;
    msg += `<p><b>Resultado: </b> ${maior} </p>`;

    const alert = await this.alertController.create({
      header: 'RESULTADO',
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async menor() {
    let menor;
    if (parseFloat(this.valor1) < parseFloat(this.valor2)) {
      menor = parseFloat(this.valor1);
    } else {
      menor = parseFloat(this.valor2);
    }
    let msg = '<p><b>Valor 1: </b>' + this.valor1 + '</p>';
    msg += `<p><b>Valor 2: </b> ${this.valor2} </p>`;
    msg += `<p><b>Resultado: </b> ${menor} </p>`;

    const alert = await this.alertController.create({
      header: 'RESULTADO',
      message: msg,
      buttons: ['OK'],
    });

    this.resultado = 'testando';

    await alert.present();
  }

  async mostrarResultadoConta(valor, conta) {
    this.resultado = valor;
    this.conta = conta;
  }

  async limpar() {
    this.resultado = '';
    this.conta = '';
    this.valor1 = '';
    this.valor2 = '';
  }
}
