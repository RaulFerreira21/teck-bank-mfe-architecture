import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Auth } from '../../services/auth';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  username = '';
  password = '';
  error = '';

  constructor(private auth: Auth, private router: Router) {}

  onSubmit(): void {
    this.auth.login(this.username, this.password).subscribe({
      next: (response) => {
        console.log('Login bem-sucedido:', response);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Erro no login:', err);
        this.error = 'Usuário ou senha inválidos.';
      },
    });
  }
}
