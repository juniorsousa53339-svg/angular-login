import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {

  email: string = '';
  senha: string = '';

  onSubmit() {
    console.log('Email:', this.email);
    console.log('Senha:', this.senha);
  }
   }
