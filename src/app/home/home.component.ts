import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @ViewChild('textoParaCopiar') area!: ElementRef;

  copiarTexto( elemento: HTMLElement) {
    const texto = elemento.innerText;
    navigator.clipboard.writeText(texto)
      .then(() => {
        console.log('Texto copiado');
      })
      .catch(err => {
        console.error('Erro ao copiar texto: ', err);
      });
  }
}
