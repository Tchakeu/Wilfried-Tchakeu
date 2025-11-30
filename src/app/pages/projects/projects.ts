import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  category: string;
}
@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
 selectedCategory: string = 'all';
  
  categories = [
    { id: 'all', label: 'Tous' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'devops', label: 'DevOps' },
    { id: 'frontend', label: 'Frontend' }
  ];

  projects: Project[] = [
    {
      id: 1,
      title: 'Plateforme E-commerce',
      description: 'Application e-commerce complète avec panier, paiement et gestion des commandes. Architecture microservices avec Docker.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Docker', 'Stripe'],
      image: '🛒',
      githubUrl: 'https://github.com/votre-username/ecommerce',
      liveUrl: 'https://demo-ecommerce.com',
      category: 'fullstack'
    },
    {
      id: 2,
      title: 'Pipeline CI/CD',
      description: 'Infrastructure automatisée avec Jenkins, Docker et Kubernetes pour déploiement continu.',
      technologies: ['Jenkins', 'Docker', 'Kubernetes', 'GitLab', 'Terraform'],
      image: '🔄',
      githubUrl: 'https://github.com/votre-username/cicd-pipeline',
      category: 'devops'
    },
    {
      id: 3,
      title: 'Dashboard Analytics',
      description: 'Tableau de bord temps réel pour visualisation de données avec graphiques interactifs.',
      technologies: ['Angular', 'Chart.js', 'RxJS', 'WebSocket'],
      image: '📊',
      githubUrl: 'https://github.com/votre-username/dashboard',
      liveUrl: 'https://dashboard-demo.com',
      category: 'frontend'
    },
    {
      id: 4,
      title: 'API REST Sécurisée',
      description: 'API RESTful avec authentification JWT, rate limiting et documentation Swagger.',
      technologies: ['Node.js', 'Express', 'JWT', 'PostgreSQL', 'Swagger'],
      image: '🔐',
      githubUrl: 'https://github.com/votre-username/secure-api',
      category: 'fullstack'
    },
    {
      id: 5,
      title: 'Monitoring Stack',
      description: 'Stack de monitoring avec Prometheus, Grafana et Alertmanager pour infrastructure cloud.',
      technologies: ['Prometheus', 'Grafana', 'Docker', 'Alertmanager'],
      image: '📈',
      githubUrl: 'https://github.com/votre-username/monitoring',
      category: 'devops'
    },
    {
      id: 6,
      title: 'Progressive Web App',
      description: 'Application web progressive avec fonctionnalités offline et notifications push.',
      technologies: ['Angular', 'Service Workers', 'IndexedDB', 'PWA'],
      image: '📱',
      githubUrl: 'https://github.com/votre-username/pwa',
      liveUrl: 'https://pwa-demo.com',
      category: 'frontend'
    }
  ];

  get filteredProjects(): Project[] {
    if (this.selectedCategory === 'all') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.selectedCategory);
  }

  selectCategory(categoryId: string): void {
    this.selectedCategory = categoryId;
  }

  openLink(url: string | undefined): void {
    if (url) {
      window.open(url, '_blank');
    }
  }
}

