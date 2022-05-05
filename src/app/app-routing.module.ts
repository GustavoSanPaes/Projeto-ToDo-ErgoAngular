
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizarComponent } from './crudTarefas/atualizar-tarefa/atualizar.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"", redirectTo: "/home", pathMatch:"full"},
  {path:"atualizar/:id", component: AtualizarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
