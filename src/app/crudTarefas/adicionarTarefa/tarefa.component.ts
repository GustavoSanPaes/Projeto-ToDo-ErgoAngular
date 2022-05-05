import { CrudService } from './../crud.service';
import { Tarefas } from './../model/tarefas';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'adicionar-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {

  emptyInput: boolean = false;

  tarefa: Tarefas = {
    compromisso: ""
  };

  constructor(private service: CrudService) {}

  ngOnInit(): void {}

  novaTarefa(): void {

    if (this.tarefa.compromisso == '') {
      this.emptyInput = true;
      return;
    }


    this.service.novaTarefa(this.tarefa).subscribe(() => {
     
     setTimeout(() => {
       location.reload();
     }, 500);
     console.log(this.tarefa)
    });

    this.cleanInput();

  }


  onKeyUp(){
    this.emptyInput = false;

  }

  cleanInput() {
    this.tarefa.compromisso = '';

  }


}


/*TAREFA_KEY = 'tarefa_key'
  listaTarefas : any[] = []
  constructor() { }

  ngOnInit(): void {
     const tarefas = localStorage.getItem(this.TAREFA_KEY)
    if (tarefas){
      this.listaTarefas = JSON.parse(tarefas)
    }
  }
  //remove espaços em branco .trim
  adicionar(nomeTarefa: string) {
    if (nomeTarefa.trim().length == 0){
      return;
    }

   //não permite repetir tarefa, maiúsculo e minúsculo têm pesos iguais
    const tarefaEncontrada = this.listaTarefas.find(item => item.nome.toLowerCase() == nomeTarefa.toLowerCase())
    if (!tarefaEncontrada){
      this.listaTarefas.push({id: this.listaTarefas.length, nome: nomeTarefa, concluida: false})
      this.salvarLista()
    }
  }

  deletar(id: number) {
    this.listaTarefas = this.listaTarefas.filter(item => (item.id != id))
    this.salvarLista()
  }

  completar(id: number) {
    const tarefaEncontrada = this.listaTarefas.find( item => item.id == id)

    if (tarefaEncontrada){
      tarefaEncontrada.concluida = !tarefaEncontrada.concluida
      this.salvarLista()
    }

  }

  private salvarLista(){
    localStorage.setItem(this.TAREFA_KEY, JSON.stringify(this.listaTarefas))
  }*/
