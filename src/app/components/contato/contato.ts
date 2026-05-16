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
      { icon: '✉', label: 'Outlook', href: 'mailto:matheusgslira@outlook.com' },
      { icon: '📞', label: '(87) 98114-6123', href: 'tel:+5587981146123' },
      { icon: '📍', label: 'Recife - PE', href: '#' },
      { icon: '💼', label: 'LinkedIn', href: 'https://www.linkedin.com/in/matheus-lira-a18006158/' },
      { icon: '🐙', label: 'GitHub', href: 'https://github.com/matheusglira' },
      { icon: '📷', label: 'Instagram', href: 'https://www.instagram.com/matheusgslira/' },
  ];
}
