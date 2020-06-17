import { Component, OnInit } from '@angular/core';
import { MatAccordionTogglePosition } from '@angular/material/expansion';

@Component({
  selector: 'app-duvidas-comuns',
  templateUrl: './duvidas-comuns.component.html',
  styleUrls: ['./duvidas-comuns.component.css']
})
export class DuvidasComunsComponent implements OnInit {

  multi: boolean = true;
  
  togglePosition: MatAccordionTogglePosition;

  public panelOpenState: boolean = true; 

  constructor() { }

  ngOnInit(): void {
  }

}
