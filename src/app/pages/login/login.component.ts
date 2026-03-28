import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  senha: string = '';
  lembrar: boolean = false;
  erro: string = '';

  onSubmit() {
    if (this.email === 'admin@email.com' && this.senha === '123456') {
      alert('Login sucesso 🚀');
    } else {
     this.erro = "Credenciais incorretas. Verifique e tente novamente.";
    }
  }
}