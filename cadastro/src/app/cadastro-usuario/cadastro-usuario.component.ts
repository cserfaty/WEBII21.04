import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-cadastro-usuario',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent {
  public formCadastro: FormGroup;

  estados = [
    { valor: 'PR', nome: 'Paraná' },
    { valor: 'SC', nome: 'Santa Catarina' },
    { valor: 'SP', nome: 'São Paulo' },
    { valor: 'RJ', nome: 'Rio de Janeiro' }
  ];

  constructor(private fb: FormBuilder) {
    this.formCadastro = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.pattern('[0-9]{10,11}')],
      dataNascimento: ['', Validators.required],
      sexo: ['', Validators.required],
      endereco: this.fb.group({
        rua: ['', Validators.required],
        numero: ['', Validators.required],
        cidade: ['', Validators.required],
        estado: ['', Validators.required]
      }),
      aceitaTermos: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.formCadastro.valid) {
      alert('Cadastro realizado com sucesso!');
      console.log(this.formCadastro.value);
      this.formCadastro.reset();
    } else {
      this.validarCampos(this.formCadastro);
    }
  }

  validarCampos(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      const controle = formGroup.get(campo);
      if (controle instanceof FormGroup) {
        this.validarCampos(controle);
      } else {
        controle?.markAsTouched();
      }
    });
  }
}
