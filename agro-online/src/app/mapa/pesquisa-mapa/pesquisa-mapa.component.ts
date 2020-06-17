import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm } from '@angular/forms';
import { MatAccordionTogglePosition } from '@angular/material/expansion';

@Component({
  selector: 'app-pesquisa-mapa',
  templateUrl: './pesquisa-mapa.component.html',
  styleUrls: ['./pesquisa-mapa.component.css']
})
export class PesquisaMapaComponent implements OnInit {

  multi: boolean = true;
  
  togglePosition: MatAccordionTogglePosition;

  public panelOpenState: boolean = true; 

  pesquisaHome: FormGroup;
  
  pesquisa: String='';

  constructor(private formBuilder: FormBuilder) {
    this.pesquisaHome = formBuilder.group({
      'pesquisa' : [null]
    });
  }

  ngOnInit(): void {
  }

}
