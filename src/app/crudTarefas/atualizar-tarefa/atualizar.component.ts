import { CrudService } from './../crud.service';
import { Tarefas } from './../model/tarefas';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.component.html',
  styleUrls: ['./atualizar.component.css']
})

export class AtualizarComponent implements OnInit {

  emptyInput: boolean = false;

  tarefa: Tarefas = {
    compromisso:"",

  };

  constructor(
    private service: CrudService,
    private router: Router,
    private id: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const takeId = this.id.snapshot.paramMap.get('id');
    this.service.buscarPorId(String(takeId)).subscribe((t) => {
      this.tarefa= t;
    });
  }

  atualizarTarefa(): void {
    if(this.tarefa.compromisso == ''){
      this.emptyInput = true;
      return;
    }
    this.service.atualizarTarefa(this.tarefa).subscribe(() => {
     // console.log(this.service.showMessage('Tarefa Atualizada'))
      this.cancel();
      console.log(this.tarefa);
    });
  }

  cancel(): void {
    this.router.navigate(['/home']);
  }

  onKeyUp(){
    this.emptyInput = false;
  }

}
