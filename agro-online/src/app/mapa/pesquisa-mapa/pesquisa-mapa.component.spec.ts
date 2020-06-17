import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaMapaComponent } from './pesquisa-mapa.component';

describe('PesquisaMapaComponent', () => {
  let component: PesquisaMapaComponent;
  let fixture: ComponentFixture<PesquisaMapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisaMapaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
