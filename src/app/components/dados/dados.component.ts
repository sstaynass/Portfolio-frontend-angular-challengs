import { Component } from '@angular/core';

@Component({
  selector: 'app-dados',
  imports: [],
  templateUrl: './dados.component.html',
  styleUrl: './dados.component.scss'
})
export class DadosComponent {

  copiarTexto( elemento: HTMLElement) {
    const texto = elemento.innerText;
    navigator.clipboard.writeText(texto)
      .then(() => {
        console.log('Texto copiado');
      })
      .catch(err => {
        console.error('Erro ao copiar texto: ', err);
      });
      alert('Texto copiado');
  }
  
}
