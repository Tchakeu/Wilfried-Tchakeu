import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
@Component({
  selector: 'app-contacts',
  imports: [CommonModule, FormsModule],
  templateUrl: './contacts.html',
  styleUrl: './contacts.css',
})
export class Contacts {
 formData: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  contactInfo = [
    { icon: '📧', label: 'Email', value: 'votre.email@example.com', link: 'mailto:votre.email@example.com' },
    { icon: '📱', label: 'Téléphone', value: '+33 6 XX XX XX XX', link: 'tel:+33600000000' },
    { icon: '📍', label: 'Localisation', value: 'Amiens, France', link: '' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/votre-profil', link: 'https://linkedin.com/in/votre-profil' }
  ];

  onSubmit(): void {
    if (this.isFormValid()) {
      this.isSubmitting = true;
      this.submitSuccess = false;
      this.submitError = false;

      // Simuler l'envoi du formulaire
      setTimeout(() => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.resetForm();

        // Cacher le message de succès après 5 secondes
        setTimeout(() => {
          this.submitSuccess = false;
        }, 5000);
      }, 1500);
    }
  }

  isFormValid(): boolean {
    return !!(
      this.formData.name.trim() &&
      this.formData.email.trim() &&
      this.formData.subject.trim() &&
      this.formData.message.trim() &&
      this.isValidEmail(this.formData.email)
    );
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  resetForm(): void {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }

  openLink(link: string): void {
    if (link) {
      window.open(link, '_blank');
    }
  }
}