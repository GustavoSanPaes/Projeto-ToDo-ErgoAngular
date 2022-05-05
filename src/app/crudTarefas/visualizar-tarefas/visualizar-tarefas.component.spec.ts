import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarTarefasComponent } from './visualizar-tarefas.component';

describe('VisualizarTarefasComponent', () => {
  let component: VisualizarTarefasComponent;
  let fixture: ComponentFixture<VisualizarTarefasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarTarefasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
