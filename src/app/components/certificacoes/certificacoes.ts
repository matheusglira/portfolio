import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificacoes',
  imports: [CommonModule],
  templateUrl: './certificacoes.html',
  styleUrl: './certificacoes.scss',
})
export class CertificacoesComponent {

    certs = [
    { title: 'EF Education First – EF SET', icon: 'EF', color: 'blue' },
    { title: 'Scrum Fundamentals Certified – SCRUMStudy', icon: 'SC', color: 'green' },
    { title: 'Treinamento Angular 12 – Impacta', icon: 'A', color: 'red' },
    { title: 'Dominando o Angular 9 - Udemy', icon: 'U', color: 'orange' },
  ];
  
}
