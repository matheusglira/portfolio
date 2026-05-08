import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class SkillsComponent {
  skills = [
    { name: 'Outsystems 11', class: 'outsystems', icon: 'O' },
    { name: 'Java 8, 17, 21', class: 'java', icon: 'J' },
    { name: 'Spring Boot 3', class: 'spring', icon: 'S' },
    { name: 'Spring Batch', class: 'spring', icon: 'SB' },
    { name: 'Quarkus', class: 'quarkus', icon: 'Q' },
    { name: 'Javascript', class: 'react', icon: 'JS' },
    { name: 'Typescript', class: 'react', icon: 'TS' },
    { name: 'Angular', class: 'angular', icon: 'A' },
    { name: 'React', class: 'react', icon: 'R' },
    { name: 'Scrum', class: 'default', icon: '⚡' },
    { name: 'RPA (Uipath)', class: 'default', icon: 'UI' },
    { name: 'Postman', class: 'default', icon: 'P' },
    { name: 'Insomnia', class: 'default', icon: 'I' },
    { name: 'DB2', class: 'db2', icon: 'DB' },
    { name: 'JUnit', class: 'default', icon: 'JU' },
    { name: 'iReport', class: 'default', icon: 'IR' },
  ];

}
