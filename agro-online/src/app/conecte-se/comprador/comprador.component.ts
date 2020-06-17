import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { comprador } from './comprador';

@Component({
  selector: 'app-comprador',
  templateUrl: './comprador.component.html',
  styleUrls: ['./comprador.component.css']
})

export class CompradorComponent implements OnInit {

  produtos: String[] = [
    'Produto 1',
    'Produto 2',
    'Produto 3',
    'Produto 4'
  ];


  cadastroComprador: FormGroup;
  
  nome: String='';
  tipoPessoa: String='';
  representante: String='';
  ondeAtua: String='';
  whatsapp: String='';
  localizacao: String='';
  produtosInteresse: String='';
  website: String='';
  credencialEspecial: String='';
  vinculoAssociacao = new FormControl();
  nomeVinculo: String ='';

  constructor(formBuilder: FormBuilder) {
    this.cadastroComprador = formBuilder.group({
      'nome': [null, Validators.required],
      'tipoPessoa': [null, Validators.required],
      'representante': [null, Validators.required],
      'ondeAtua': [null, Validators.required],
      'whatsapp': [null, Validators.required],
      'localizacao': [null],
      'produtosInteresse': [null],
      'website': [null],
      'credencialEspecial': [null],
      'vinculoAssociacao': [null],
      'nomeVinculo': [null]

    });
  }

  cadastrar() {
    if (this.cadastroComprador.status === 'INVALID') {
      this.cadastroComprador.get('nome').markAsTouched;
      this.cadastroComprador.get('tipoPessoa').markAsTouched;
      this.cadastroComprador.get('representante').markAsTouched;
      this.cadastroComprador.get('ondeAtua').markAsTouched;
      this.cadastroComprador.get('whatsapp').markAsTouched;
    } else {
      let compradorCadastro: comprador = new comprador(
        this.cadastroComprador.value.nome,
        this.cadastroComprador.value.tipoPessoa,
        this.cadastroComprador.value.representante,
        this.cadastroComprador.value.ondeAtua,
        this.cadastroComprador.value.whatsapp,
        this.cadastroComprador.value.localizacao,
        this.cadastroComprador.value.produtosInteresse,
        this.cadastroComprador.value.website,
        this.cadastroComprador.value.credencialEspecial,
        this.cadastroComprador.value.vinculoAssociacao,
        this.cadastroComprador.value.nomeVinculo
      );
      console.log(this.cadastroComprador);
      console.log(comprador);
    }

  }

  ngOnInit(): void {
  }  
    
}
