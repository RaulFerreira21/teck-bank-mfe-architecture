import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private readonly apiUrl = 'https://dummyjson.com/auth/login';

  async login(username: string, password: string): Promise<any> {
    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
          expiresInMins: 30,
        }),
      });

      if (!response.ok) {
        throw new Error('Falha no login');
      }

      return await response.json();
    } catch (error) {
      console.error('Erro no login:', error);
      throw error;
    }
  }
}
