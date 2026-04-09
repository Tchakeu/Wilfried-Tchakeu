import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './contacts.html',
  styleUrls: ['./contacts.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Contacts {

  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faMapMarkerAlt = faMapMarkerAlt;
  faLinkedin = faLinkedin;
  faPaperPlane = faPaperPlane;

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;

  // Notification
  showNotification = false;
  notificationMessage = '';
  notificationType = 'success';
  notificationTitle = '';

  contactInfo = [
    { icon: this.faEnvelope, label: 'Email', value: 'wilfried.tchakeu@gmail.com', link: 'mailto:wilfried.tchakeu@gmail.com' },
    { icon: this.faPhone, label: 'Téléphone', value: '+33 6 XX XX XX XX', link: 'tel:+33600000000' },
    { icon: this.faMapMarkerAlt, label: 'Localisation', value: 'Amiens, France', link: '' },
    { icon: this.faLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/wilfried-tchakeu-8729292b0', link: 'https://linkedin.com/in/wilfried-tchakeu-8729292b0' }
  ];

  private formspreeEndpoint = 'https://formspree.io/f/xnjokqgj';

  isFormValid(): boolean {
    return !!(this.formData.name && this.formData.email &&
             this.formData.subject && this.formData.message &&
             this.isValidEmail(this.formData.email));
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  showNotificationMessage(title: string, message: string, type: 'success' | 'error') {
    this.notificationTitle = title;
    this.notificationMessage = message;
    this.notificationType = type;
    this.showNotification = true;

    // Auto hide after 4 seconds
    setTimeout(() => {
      this.showNotification = false;
    }, 4000);
  }

  async send(): Promise<void> {
    if (!this.isFormValid()) return;

    this.isSubmitting = true;

    try {
      const response = await fetch(this.formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: this.formData.name,
          email: this.formData.email,
          subject: this.formData.subject,
          message: this.formData.message,
          _replyto: this.formData.email
        })
      });

      const data = await response.json();

      if (response.ok) {
        this.showNotificationMessage(
          'Succès',
          'Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.',
          'success'
        );
        this.formData = { name: '', email: '', subject: '', message: '' };
      } else {
        throw new Error(data.error || 'Erreur lors de l\'envoi');
      }
    } catch (error: any) {
      console.error('Erreur d\'envoi:', error);
      this.showNotificationMessage(
        'Erreur',
        'Une erreur est survenue. Veuillez réessayer plus tard.',
        'error'
      );
    } finally {
      this.isSubmitting = false;
    }
  }

  openLink(link: string): void {
    if (link) window.open(link, '_blank');
  }
}
