import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProjetosComponent } from "../projetos/projetos.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [ProjetosComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  projetos = [
    {
      imagem: 'jordanshoes.png',
      titulo: 'Jordan Shoes'
    },
    {
      imagem: 'caminho/para/imagem2.jpg',
      titulo: 'Projeto 2'
    },
    {
      imagem: 'caminho/para/imagem3.jpg',
      titulo: 'Projeto 3'
    }
  ];

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
      alert('Texto copiado');
  }

  scrollTo(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  baixarCurriculo() {
    const link = document.createElement('a');
    link.href = 'Tayna_Soares_Curriculo.pdf';
    link.download = 'Tayna_Soares_Curriculo.pdf';
    link.click();
  }
}
