import { CommonModule } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent {
  activeSection = signal('home');
  mobileOpen = signal(false);

  navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'sobre', label: 'Sobre', icon: '👤'  },
    { id: 'experiencia', label: 'Experiência', icon: '📅'  },
    { id: 'competencias', label: 'Skills', icon: '⚡'  },
    { id: 'certificacoes', label: 'Certificações', icon: '🏆'  },
    { id: 'contato', label: 'Contato', icon: '✉️'  },
  ];

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if(element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.activeSection.set(id);
      this.mobileOpen.set(false);
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    const sections = this.navItems.map(n => n.id);
    for(const id of [...sections].reverse()) { 
      const element = document.getElementById(id);
      if(element && element.getBoundingClientRect().top <= 200) {
        this.activeSection.set(id);
        break;
      }
    }
  }
}
