import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


interface Experiencia {
  funcao: string;
  empresa: string;
  periodo: string;
  descricao: string;
  tags: { label: string; class: string }[];
  isAtual: boolean;
}

@Component({
  selector: 'app-experiencia',
  imports: [CommonModule],
  templateUrl: './experiencia.html',
  styleUrl: './experiencia.scss',
})

export class ExperienciaComponent {

  experiencias: Experiencia[] = [
    {
      funcao: 'Analista Desenvolvedor',
      empresa: 'Certsys',
      periodo: 'Jan de 2026 - ',
      isAtual: true,
      descricao: 'Atuo como desenvolvedor Java em um projeto interno da Caixa Econômica Federal, ' +
                 'trabalhando no backend com Quarkus e no frontend com Angular. ' +
                 'Sou responsável pelo desenvolvimento e manutenção de funcionalidades, '+ 
                 'além  da implementação de testes unitários utilizando JUnit no backend e Jest no frontend, '+
                 'garantindo qualidade, estabilidade e confiabilidade nas entregas.',
      tags: [
        { label: 'Java', class: 'java' },
        { label: 'Quarkus', class: 'quarkus' },
        { label: 'Angular', class: 'angular' },
        { label: 'JUnit', class: 'junit' },
        { label: 'Jest', class: 'jest' },
        { label: 'DB2', class: 'db2' }
      ]
    },
    {
      funcao: 'Analista Desenvolvedor',
      empresa: 'Qintess',
      periodo: 'Out de 2025 - Jan de 2026',
      isAtual: false,
      descricao: 'Atuo como desenvolvedor Java em um projeto interno da Caixa Econômica Federal, ' +
                 'trabalhando no backend com Quarkus e no frontend com Angular. ' +
                 'Sou responsável pelo desenvolvimento e manutenção de funcionalidades, '+ 
                 'além  da implementação de testes unitários utilizando JUnit no backend e Jest no frontend, '+
                 'garantindo qualidade, estabilidade e confiabilidade nas entregas.',
      tags: [
        { label: 'Java', class: 'java' },
        { label: 'Quarkus', class: 'quarkus' },
        { label: 'Angular', class: 'angular' },
        { label: 'JUnit', class: 'junit' },
        { label: 'Jest', class: 'jest' },
        { label: 'DB2', class: 'db2' }
      ]
    },
    {
      funcao: 'Outsystems Developer',
      empresa: 'Mirante Tecnologia',
      periodo: 'Jun de 2025 - Set de 2025',
      isAtual: false,
      descricao: 'Desenvolvimento de sistemas web utilizando a plataforma Outsystems(Reative Web) para a Petrobrás, ' +
                 'construção de interfaces responsivas e modulares, aplicando boas práticas de usabilidade. Participação em ' +
                 'todo o ciclo de desenvolvimento.',
      tags: [
        { label: 'Outsystems', class: 'outsystems' },
      ]
    },
  ];

}
