import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-investment-contact',
  standalone: true,
  imports: [InputTextModule, ReactiveFormsModule, ButtonModule, NgClass, NgIf],
  templateUrl: './investment-contact.component.html',
  styleUrl: './investment-contact.component.scss',
})
export class InvestmentContactComponent {
  contactForm = new FormGroup({
    cardType: new FormControl('', [Validators.required, Validators.email]),
    nameOnCard: new FormControl('', [Validators.required]),
  });

  onSubmit(): void {
    console.log(this.contactForm);
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    }
  }
}
