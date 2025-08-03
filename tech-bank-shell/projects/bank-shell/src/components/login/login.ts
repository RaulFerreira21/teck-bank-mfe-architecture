import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  username = 'emilys';
  password = 'emilyspass';

  constructor(private auth: Auth, private router: Router) {}

  async onSubmit() {
    try {
      const response = await this.auth.login(this.username, this.password);
      console.log('Login bem-sucedido:', response);
      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Erro:', error);
    }
  }
}
