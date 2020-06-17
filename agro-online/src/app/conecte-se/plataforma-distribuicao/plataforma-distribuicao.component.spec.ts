import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlataformaDistribuicaoComponent } from './plataforma-distribuicao.component';

describe('PlataformaDistribuicaoComponent', () => {
  let component: PlataformaDistribuicaoComponent;
  let fixture: ComponentFixture<PlataformaDistribuicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlataformaDistribuicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlataformaDistribuicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
