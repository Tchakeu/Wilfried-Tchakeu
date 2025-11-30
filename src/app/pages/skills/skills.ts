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
        { name: 'Angular', level: 90, category: 'frontend', icon: '🅰️' },
        { name: 'TypeScript', level: 85, category: 'frontend', icon: '📘' },
        { name: 'HTML/CSS', level: 95, category: 'frontend', icon: '🎨' },
        { name: 'JavaScript', level: 88, category: 'frontend', icon: '💛' },
        { name: 'React', level: 75, category: 'frontend', icon: '⚛️' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85, category: 'backend', icon: '🟢' },
        { name: 'Express.js', level: 80, category: 'backend', icon: '🚂' },
        { name: 'MongoDB', level: 75, category: 'backend', icon: '🍃' },
        { name: 'PostgreSQL', level: 80, category: 'backend', icon: '🐘' },
        { name: 'REST API', level: 90, category: 'backend', icon: '🔌' }
      ]
    },
    {
      title: 'DevOps',
      skills: [
        { name: 'Docker', level: 88, category: 'devops', icon: '🐳' },
        { name: 'Kubernetes', level: 75, category: 'devops', icon: '☸️' },
        { name: 'CI/CD', level: 82, category: 'devops', icon: '🔄' },
        { name: 'Jenkins', level: 78, category: 'devops', icon: '👨‍🔧' },
        { name: 'GitLab CI', level: 85, category: 'devops', icon: '🦊' },
        { name: 'AWS', level: 70, category: 'devops', icon: '☁️' }
      ]
    },
    {
      title: 'Outils & Autres',
      skills: [
        { name: 'Git', level: 92, category: 'tools', icon: '📦' },
        { name: 'Linux', level: 85, category: 'tools', icon: '🐧' },
        { name: 'Nginx', level: 75, category: 'tools', icon: '🌐' },
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
