import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from  './content/content.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { AcessoNegadoComponent } from './acesso-negado/acesso-negado.component';
import { HomeLogadaComponent } from './home-logada/home-logada.component';
import { LoginComponent } from './login/login.component';
import { CadastroConcluidoComponent } from './cadastro-concluido/cadastro-concluido.component';
import { AuthGuard } from 'src/auth.guard';

  const routes: Routes = [
    { path: '', component: ContentComponent},
    { path: 'cadastro-clientes', component: CadastroClientesComponent},
    { path: 'cadastro-concluido', component: CadastroConcluidoComponent},
    { path: 'login', component: LoginComponent},
    { path: 'home-logada', component: HomeLogadaComponent, canActivate: [AuthGuard]},
    { path: 'acesso-negado', component: AcessoNegadoComponent}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
