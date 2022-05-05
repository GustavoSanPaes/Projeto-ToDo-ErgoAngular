import { Tarefas } from './model/tarefas';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private readonly baseUrl = "https://localhost:5001/tarefa";


 /* constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ['msg-success']
    })
  }*/

  constructor(private http: HttpClient) {}


  buscar(): Observable<Tarefas[]> {
    return this.http.get<Tarefas[]>(this.baseUrl);
  }

  buscarPorId(id: string): Observable<Tarefas>{
    return this.http.get<Tarefas>(`${this.baseUrl}/${id}`)

  }

  novaTarefa(newTask: Tarefas): Observable<Tarefas> {
    return this.http.post<Tarefas>(this.baseUrl, newTask);
  }

  atualizarTarefa(task: Tarefas): Observable<Tarefas>{
    const url = `${this.baseUrl}/${task.id}`
    return this.http.put<Tarefas>(url, task)
  }

  deletar(id: number): Observable<Task> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Task>(url);
  }
}
