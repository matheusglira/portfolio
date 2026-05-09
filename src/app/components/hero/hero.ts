import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent implements OnInit {
  displayText = signal('');
  private fullText = 'Desenvolvedor Fullstack';
  private index = 0;
  activeSection = signal('home');

  techIcons = [
    { name: 'Angular', class:'angular', letter: 'A'},
    { name: 'Spring', class:'spring', letter: 'S'},
    { name: 'Quarkus', class:'quarkus', letter: 'Q'},
    { name: 'Java', class:'java', letter: 'J'},
    { name: 'DB2', class:'db2', letter: 'DB'},
    { name: 'Outsystems', class:'outsystems', letter: 'O'},
  ];

  ngOnInit() {
    this.typeWriter();
  }

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if(element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  typeWriter() {
    if(this.index < this.fullText.length) {
      this.displayText.set(this.fullText.substring(0, this.index + 1));
      this.index++;
      setTimeout(() => this.typeWriter(), 80);
    }
  }
}
