import { CrudService } from './../crud.service';
import { Tarefas } from './../model/tarefas';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visualizar-tarefas',
  templateUrl: './visualizar-tarefas.component.html',
  styleUrls: ['./visualizar-tarefas.component.css']
})
export class VisualizarTarefasComponent implements OnInit {

  tarefa: Tarefas;
  listaTarefas: Tarefas [] = [];

  //constructor(private service: CrudService, private serviceMarkTask: MarkService) {
    constructor(private service: CrudService) {
    this.tarefa = {
    id:0,
    compromisso: "",
    status: false,
    };
  }

  ngOnInit(): void {
    this.service.buscar().subscribe((tarefa: Tarefas[]) => {
      this.listaTarefas = tarefa;
    });
  }

  deletarTarefa(id: number): void {
    const deletarTarefa = window.confirm(`Deletar Tarefa`);

    if (!deletarTarefa){
      return;
    }
    this.service.deletar((this.tarefa.id = id)).subscribe(() => {
     
      setTimeout(() => {
        location.reload();
      }, 1000);
      console.log("deletou")
    });
  }

  marcarTarefa(status: boolean, id: number) {
    this.listaTarefas.forEach((x) => {
      if (id == x.id) {
        let idtarefa = id;
        let mark = (x.status = !status);
        let text = x.compromisso;


        this.tarefa = {
          id: idtarefa,
          status: mark,
          compromisso: text

        };
        this.service.atualizarTarefa(this.tarefa).subscribe(() => {
          console.log(this.tarefa)
        });
      }
    });
  }
  }

