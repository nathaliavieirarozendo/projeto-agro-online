import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuvidasComunsComponent } from './duvidas-comuns.component';

describe('DuvidasComunsComponent', () => {
  let component: DuvidasComunsComponent;
  let fixture: ComponentFixture<DuvidasComunsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuvidasComunsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuvidasComunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
