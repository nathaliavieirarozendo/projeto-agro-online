import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { transportador } from './transportador';

@Component({
  selector: 'app-transportador',
  templateUrl: './transportador.component.html',
  styleUrls: ['./transportador.component.css']
})
export class TransportadorComponent implements OnInit {

  tiposCaminhao: String[] = [
    'Caminhão 1',
    'Caminhão 2',
    'Caminhão 3',
    'Caminhão 4'
  ];

  cadastroTransportador: FormGroup;
  
  nome: String='';
  tipoPessoa: String='';
  representante: String='';
  ondeAtua: String='';
  whatsapp: String='';
  localizacao: String='';
  tipoCaminhao: String='';
  website: String='';
  credencialEspecial: String='';
  vinculoAssociacao = new FormControl();
  nomeVinculo: String='';

  constructor(formBuilder: FormBuilder) {
    this.cadastroTransportador = formBuilder.group({
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
      'nomeAssociacao': [null]

    });
  }

  cadastrar() {
    if (this.cadastroTransportador.status === 'INVALID') {
      this.cadastroTransportador.get('nome').markAsTouched;
      this.cadastroTransportador.get('tipoPessoa').markAsTouched;
      this.cadastroTransportador.get('representante').markAsTouched;
      this.cadastroTransportador.get('ondeAtua').markAsTouched;
      this.cadastroTransportador.get('whatsapp').markAsTouched;
    } else {
      let compradorCadastro: transportador = new transportador(
        this.cadastroTransportador.value.nome,
        this.cadastroTransportador.value.tipoPessoa,
        this.cadastroTransportador.value.representante,
        this.cadastroTransportador.value.ondeAtua,
        this.cadastroTransportador.value.whatsapp,
        this.cadastroTransportador.value.localizacao,
        this.cadastroTransportador.value.tipoCaminhao,
        this.cadastroTransportador.value.website,
        this.cadastroTransportador.value.credencialEspecial,
        this.cadastroTransportador.value.vinculoAssociacao,
        this.cadastroTransportador.value.nomeAssociacao
      );
      console.log(this.cadastroTransportador);
      console.log(transportador);
    }

  }

  ngOnInit(): void {
  }

}
