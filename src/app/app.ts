import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import * as router from '@angular/router';

interface Skill {
  name: string;
  icon: string; // CSS class or emoji
  level: string;
}

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

interface Project {
  title: string;
  description: string;
  link: string;
  tech: string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, router.RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  // Hero Section
  name = signal('Matheus Fellipe Fernandes Lima');
  role = signal('Software Developer');
  bio = signal('Technology enthusiast, motivated to develop innovative and efficient solutions. With knowledge in web and systems development, I seek to gain practical experience and have a strong willingness to learn and grow, aiming to deliver high-quality results.');

  // Skills Section
  skills = signal<Skill[]>([
    { name: 'Angular', icon: 'fab fa-angular', level: '' },
    { name: 'Java', icon: 'fab fa-java', level: '' },
    { name: 'Node.js', icon: 'fab fa-node', level: '' },
    { name: 'HTML/CSS', icon: 'fab fa-html5', level: '' },
    { name: 'AWS', icon: 'fab fa-aws', level: '' },
    { name: 'React', icon: 'fab fa-react', level: '' },
  ]);

  // Experience Section
  experience = signal<Experience[]>([
    {
      role: '',
      company: '',
      period: '',
      description: ''
    },
    {
      role: '',
      company: '',
      period: '',
      description: ''
    },
    {
      role: '',
      company: '',
      period: '',
      description: ''
    }
  ]);

  // Projects Section (Optional but good for portfolio)
  projects = signal<Project[]>([
    {
       title: '',
       description: '',
       link: '',
       tech: []
    },
    {
       title: '',
       description: '',
       link: '',
       tech: []
    }
  ]);

  // Contact
  email = signal('mthlima13@gmail.com');
  socials = signal([
    { name: 'GitHub', link: 'https://github.com/MthLima13', icon: 'fab fa-github' },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/matheus-lima-4a250b259/', icon: 'fab fa-linkedin' },
    { name: 'WhatsApp', link: 'https://wa.me/5531971739950', icon: 'fab fa-whatsapp' }
  ]);

  currentYear = new Date().getFullYear();
}
