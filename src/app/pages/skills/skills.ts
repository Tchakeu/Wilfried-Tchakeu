import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
 skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: [
        { name: 'Angular', level: 90, category: 'frontend', icon: 'assets/img/techno/angular.png' },
        { name: 'TypeScript', level: 85, category: 'frontend', icon: '📘' },
        { name: 'HTML/CSS', level: 95, category: 'frontend', icon: '🎨' },
        { name: 'JavaScript', level: 88, category: 'frontend', icon: '💛' },
        { name: 'React', level: 75, category: 'frontend', icon: 'assets/img/techno/react.png' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Spring boot', level: 85, category: 'backend', icon: 'assets/img/techno/spring.png' },
        { name: 'Node.js', level: 85, category: 'backend', icon: 'assets/img/techno/node.png' },
        { name: 'Laravel', level: 80, category: 'backend', icon: 'assets/img/techno/laravel.png' },
        { name: 'MySQL', level: 75, category: 'backend', icon: 'assets/img/techno/mysql.png' },
        { name: 'PostgreSQL', level: 80, category: 'backend', icon: 'assets/img/techno/postgresql.png' },
        { name: 'MongoDB', level: 75, category: 'backend', icon: 'assets/img/techno/mongo.png' },
        { name: 'Python', level: 90, category: 'backend', icon: 'assets/img/techno/python.png' }
      ]
    },
    {
      title: 'DevOps',
      skills: [
        { name: 'Docker', level: 88, category: 'devops', icon: 'assets/img/techno/docker.png' },
        { name: 'Kubernetes', level: 75, category: 'devops', icon: '☸️' },
        { name: 'CI/CD', level: 82, category: 'devops', icon: '🔄' },
        { name: 'Jenkins', level: 78, category: 'devops', icon: 'assets/img/techno/jenkins.png' },
        { name: 'GitLab CI', level: 85, category: 'devops', icon: '🦊' },
        { name: 'AWS', level: 70, category: 'devops', icon: '☁️' }
      ]
    },
    {
      title: 'Outils & Autres',
      skills: [
        { name: 'Git', level: 92, category: 'tools', icon: 'assets/img/techno/git.png' },
        { name: 'Linux', level: 85, category: 'tools', icon: 'assets/img/techno/linux.png' },
        { name: 'Nginx', level: 75, category: 'tools', icon: '🌐' },
        { name: 'Figma', level: 75, category: 'tools', icon: 'assets/img/techno/figma.png' },
        { name: 'Terraform', level: 68, category: 'tools', icon: '🏗️' },
        { name: 'Ansible', level: 70, category: 'tools', icon: '🔧' }
      ]
    }
  ];

  ngOnInit(): void {
    this.animateSkillBars();
  }

  private animateSkillBars(): void {
    setTimeout(() => {
      const skillBars = document.querySelectorAll('.skill-progress');
      skillBars.forEach((bar) => {
        const level = bar.getAttribute('data-level');
        if (level) {
          (bar as HTMLElement).style.width = level + '%';
        }
      });
    }, 200);
  }

  getSkillLevelText(level: number): string {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Avancé';
    if (level >= 70) return 'Intermédiaire';
    return 'Débutant';
  }
}
