import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {
  formCadastro;
  valoresForm;
  conversao;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    localStorage.clear()
   this.formCadastro = this.fb.group({
    nome: [''],
    cpf: [''],
    email: [''],
    telefone: [''],
    endereco: ['']
   });

   console.log(this.valoresForm);
   this.formCadastro.valueChanges.pipe(
     debounceTime(1000))
     .subscribe(res => {
       console.log(res);
       this.valoresForm = res;
     });
  }
  cadastro() {
    this.conversao = JSON.stringify(this.valoresForm);
    console.log(this.conversao)
    localStorage.setItem('cadastro', this.conversao);

    this.verificaCadastro();
  }

  verificaCadastro() {
    setTimeout(() => {
      if (localStorage.getItem('cadastro')) {
        // TODO REDIRECIIONAR PARA PAGINA DE CADASTRO CONCLUIDO
        this.router.navigate(['cadastro-concluido']);
      } else {
        return false;
      }
    }, 200);
  }

}
