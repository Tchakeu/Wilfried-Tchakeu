import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Timeline {
  year: string;
  title: string;
  description: string;
  type: 'education' | 'experience';
}

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
    @ViewChild('codeBg') codeBg!: ElementRef<HTMLCanvasElement>;
timeline = [
  {
    year: '2025 (en cours)',
    title: 'Bachelor Administrateur DevOps',
    description: 'Formation intensive : Kubernetes, Terraform, GitOps, observabilité, sécurité cloud et architecture microservices.',
    type: 'education' as const,
    skills: ['Kubernetes', 'Terraform', 'GitOps', 'Prometheus', 'Grafana']
  },
  {
    year: '2025',
    title: 'Conception & Développement – Agrégateur de Paiement (INS Cameroun)',
    description: 'Développement d’un agrégateur de paiement pour l’Institut National de la Statistique du Cameroun : architecture, front Angular, backend Spring Boot et base de données PostgreSQL.',
    type: 'experience' as const,
    skills: ['Angular', 'Spring Boot', 'PostgreSQL', 'Git']
  },
  {
    year: '2023 – 2024',
    title: 'Développeur Full Stack Freelance',
    description: '8+ projets livrés pour startups : dashboards, outils internes, e-commerce. Stack moderne et déploiement automatisé.',
    type: 'experience' as const,
    skills: ['Angular', 'React', 'Node.js', 'Docker', 'AWS']
  },
  {
    year: '2022 – 2025',
    title: 'Licence Professionnelle – Conception & Développement d’Applications',
    description: 'Formation orientée vers la création de solutions numériques : conception et développement d’applications distribuées, solutions système et réseau, programmation industrielle et maintenance. Approfondissement des méthodes professionnelles de développement, gestion de projets, analyse économique et réglementaire pour anticiper l’impact sur les applications.',
    type: 'education' as const,
    skills: ['Java','C++','C#', 'Architecture Logicielle', 'Gestion de Projet', 'Systèmes & Réseaux']
  },
  {
    year: '2024 (2 mois)',
    title: 'Stage Développeur Web',
    description: 'Refonte d’un outil interne critique → réduction de 70% du temps de traitement des données.',
    type: 'experience' as const,
    skills: ['Angular', 'Spring Boot', 'MySql', 'Scrum']
  }
];

  interests = [
    { icon: '💻', name: 'Développement', description: 'Création d\'applications web modernes' },
    { icon: '☁️', name: 'Cloud Computing', description: 'Architecture et déploiement cloud' },
    { icon: '🔧', name: 'Automatisation', description: 'CI/CD et infrastructure as code' },
    { icon: '📚', name: 'Veille Technologique', description: 'Nouvelles technologies et tendances' },
    { icon: '🎮', name: 'Gaming', description: 'Jeux vidéo et e-sport' },
    { icon: '🎵', name: 'Musique', description: 'Production musicale et mixage' }
  ];

stats = [
  { value: '3+', label: 'Ans de code intensif' },
  { value: '12+', label: 'Projets full stack livrés' },
  { value: '6+', label: 'Pipelines CI/CD créés' },
  { value: '∞', label: 'Envie d\'apprendre' }
];

  ngAfterViewInit() {
    const canvas = this.codeBg.nativeElement;
    const ctx = canvas.getContext('2d')!;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const chars = "01<>;{}[]()".split('');
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(0);

    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "rgba(100,200,255,0.8)";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height || Math.random() > 0.95) {
          drops[i] = 0;
        }

        drops[i]++;
      }

      requestAnimationFrame(draw);
    };

    draw();
  }
}
