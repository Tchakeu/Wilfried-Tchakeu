import { Component } from '@angular/core';
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
timeline = [
  {
    year: '2025 (en cours)',
    title: 'Bachelor Administrateur DevOps',
    description: 'Formation intensive : Kubernetes, Terraform, GitOps, observabilité, sécurité cloud et architecture microservices.',
    type: 'education' as const,
    skills: ['Kubernetes', 'Terraform', 'GitOps', 'Prometheus', 'Grafana']
  },
  {
    year: '2024',
    title: 'Projet de fin d’études – SaaS Task Manager',
    description: 'Application full stack Angular + NestJS déployée sur Kubernetes (EKS) avec CI/CD GitHub Actions et monitoring complet.',
    type: 'experience' as const,
    skills: ['Angular', 'NestJS', 'Kubernetes', 'GitHub Actions', 'PostgreSQL']
  },
  {
    year: '2023 – 2024',
    title: 'Développeur Full Stack Freelance',
    description: '8+ projets livrés pour startups : dashboards, outils internes, e-commerce. Stack moderne et déploiement automatisé.',
    type: 'experience' as const,
    skills: ['Angular', 'React', 'Node.js', 'Docker', 'AWS']
  },
  {
    year: '2021 – 2023',
    title: 'Licence Conception & Développement d’Applications',
    description: 'Mention Bien – Spécialisation architecture logicielle, clean code, tests automatisés et méthodologies agiles.',
    type: 'education' as const,
    skills: ['Java', 'Spring Boot', 'TDD', 'Scrum']
  },
  {
    year: '2022 (6 mois)',
    title: 'Stage Développeur Web',
    description: 'Refonte d’un outil interne critique → réduction de 70% du temps de traitement des données.',
    type: 'experience' as const,
    skills: ['Angular', 'Spring Boot', 'PostgreSQL', 'Scrum']
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
}
