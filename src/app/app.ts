import { Component, inject, signal } from '@angular/core';
import { ExperienciaComponent } from './components/experiencia/experiencia';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { SobreComponent } from './components/sobre/sobre';
import { SkillsComponent } from './components/skills/skills';
import { CertificacoesComponent } from './components/certificacoes/certificacoes';
import { ContatoComponent } from './components/contato/contato';
import { FooterComponent } from './components/footer/footer';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    HeroComponent,
    SobreComponent,
    ExperienciaComponent,
    SkillsComponent,
    CertificacoesComponent,
    ContatoComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
  theme = inject(ThemeService);

  onToggleTheme() {
    this.theme.toggle();
  }
  
}
