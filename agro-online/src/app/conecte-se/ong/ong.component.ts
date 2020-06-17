import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ong } from './ong';

@Component({
  selector: 'app-ong',
  templateUrl: './ong.component.html',
  styleUrls: ['./ong.component.css']
})
export class OngComponent implements OnInit {

  produtos: String[] = [
    'Produtos 1',
    'Produtos 2',
    'Produtos 3',
    'Produtos 4'
  ];

  cadastroONG: FormGroup;
  
  nome: String='';
  cpfCnpj: String='';
  representante: String='';
  ondeAtua: String='';
  whatsapp: String='';
  localizacao: String='';
  produtoInteresse: String='';
  website: String='';
  credencialEspecial: String='';
  vinculoAssociacao = new FormControl();
  nomeAssociacao: String='';

  constructor(formBuilder: FormBuilder) {
    this.cadastroONG = formBuilder.group({
      'nome': [null, Validators.required],
      'cpfCnpj': [null, Validators.required],
      'representante': [null, Validators.required],
      'ondeAtua': [null, Validators.required],
      'whatsapp': [null, Validators.required],
      'localizacao': [null],
      'produtoInteresse': [null],
      'website': [null],
      'credencialEspecial': [null],
      'vinculoAssociacao': [null],
      'nomeAssociacao': [null]
    });
  }

  cadastrar() {
    if (this.cadastroONG.status === 'INVALID') {
      this.cadastroONG.get('nome').markAsTouched;
      this.cadastroONG.get('cpfCnpj').markAsTouched;
      this.cadastroONG.get('representante').markAsTouched;
      this.cadastroONG.get('ondeAtua').markAsTouched;
      this.cadastroONG.get('whatsapp').markAsTouched;
    } else {
      let compradorCadastro: ong = new ong(
        this.cadastroONG.value.nome,
        this.cadastroONG.value.cpfCnpj,
        this.cadastroONG.value.representante,
        this.cadastroONG.value.ondeAtua,
        this.cadastroONG.value.whatsapp,
        this.cadastroONG.value.localizacao,
        this.cadastroONG.value.produtoInteresse,
        this.cadastroONG.value.website,
        this.cadastroONG.value.credencialEspecial,
        this.cadastroONG.value.vinculoAssociacao,
        this.cadastroONG.value.nomeAssociacao
      );
      console.log(this.cadastroONG);
      console.log(ong);
    }

  }

  ngOnInit(): void {
  }


}
