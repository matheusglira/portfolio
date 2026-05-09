import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contato',
  imports: [CommonModule],
  templateUrl: './contato.html',
  styleUrl: './contato.scss',
})
export class ContatoComponent {
  contacts = [
      { icon: '✉', label: 'matheusgslira@outlook.com', href: 'mailto:matheusgslira@outlook.com' },
      { icon: '📞', label: '(87) 98114-6123', href: 'tel:+5587981146123' },
      { icon: '📍', label: 'Recife - PE', href: '#' },
      { icon: '💼', label: 'linkedin.com/in/matheus-lira-a18006158', href: 'https://www.linkedin.com/in/matheus-lira-a18006158/' },
      { icon: '🐙', label: 'github.com/matheusglira', href: 'https://github.com/matheusglira' },
      { icon: '📷', label: 'instagram.com/matheusgslira', href: 'https://www.instagram.com/matheusgslira/' },
  ];
}
