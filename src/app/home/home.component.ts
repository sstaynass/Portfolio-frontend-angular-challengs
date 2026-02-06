import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JordanComponent } from "../meus_projetos/jordan/jordan.component";
import { GhibliComponent } from "../meus_projetos/ghibli/ghibli.component";
import { DadosComponent } from "../components/dados/dados.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, JordanComponent, GhibliComponent, DadosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @ViewChild('textoParaCopiar') area!: ElementRef;
  projetos = [
    {
      imagem: 'jordanshoes.png',
      titulo: 'Jordan Shoes',
      descricao: 'javascript, html, css, angular'
    },
    {
      imagem: 'studioghibli.png',
      titulo: 'Studio Ghibli streaming',
      descricao: 'javascript, html, css, angular'
    },
    {
      imagem: 'caminho/para/imagem3.jpg',
      titulo: 'Projeto 3',
      descricao: 'javascript, html, css, angular'
    }
  ];

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
