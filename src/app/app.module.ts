import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarefaComponent } from './crudTarefas/adicionarTarefa/tarefa.component';
import { AtualizarComponent } from './crudTarefas/atualizar-tarefa/atualizar.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { VisualizarTarefasComponent } from './crudTarefas/visualizar-tarefas/visualizar-tarefas.component';

@NgModule({
  declarations: [
    AppComponent,
    TarefaComponent,
    AtualizarComponent,
    HomeComponent,
    VisualizarTarefasComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
