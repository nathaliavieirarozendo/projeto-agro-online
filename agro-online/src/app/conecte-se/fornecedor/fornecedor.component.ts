import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { fornecedor } from './fornecedor';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css']
})
export class FornecedorComponent implements OnInit {

  produtos: String[] = [
    'Produto 1',
    'Produto 2',
    'Produto 3',
    'Produto 4'
  ];

  cadastroFornecedor: FormGroup;
  
  nome: string;
  tipoPessoa: string;
  cpfCnpj: string;
  representante: string;
  produtorRural: string;
  vendaProducao: string;
  possuiCaminhao: string;
  contrataCaminhao: string;
  possuiLoja: string;
  vendaParaAssociacao: string;
  todaProducao: string;
  parteProducao: string;
  ondeAtua: string;
  whatsapp: string;
  localizacao: string;
  produtoOfertado: string;
  website: string;
  credencialEspecial: string;
  vinculoAssociacao = new FormControl();
  nomeVinculo: string;

  constructor(formBuilder: FormBuilder) {
    this.cadastroFornecedor = formBuilder.group({
      'nome': [null, Validators.required],
      'tipoPessoa': [null, Validators.required],
      'cpfCnpj': [null, Validators.required],
      'representante': [null, Validators.required],
      'produtorRural': [null],
      'vendaProducao': [null],
      'possuiCaminhao': [null],
      'contrataCaminhao': [null],
      'possuiLoja': [null],
      'vendaParaAssociacao': [null],
      'todaProducao': [null],
      'parteProducao': [null],
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
    if (this.cadastroFornecedor.status === 'INVALID') {
      this.cadastroFornecedor.get('nome').markAsTouched;
      this.cadastroFornecedor.get('tipoPessoa').markAsTouched;
      this.cadastroFornecedor.get('representante').markAsTouched;
      this.cadastroFornecedor.get('ondeAtua').markAsTouched;
      this.cadastroFornecedor.get('whatsapp').markAsTouched;
    } else {
      let compradorCadastro: fornecedor = new fornecedor(
        this.cadastroFornecedor.value.nome,
        this.cadastroFornecedor.value.tipoPessoa,
        this.cadastroFornecedor.value.cpfCnpj,
        this.cadastroFornecedor.value.representante,
        this.cadastroFornecedor.value.produtorRural,
        this.cadastroFornecedor.value.vendaProducao,
        this.cadastroFornecedor.value.possuiCaminhao,
        this.cadastroFornecedor.value.contrataCaminhao,
        this.cadastroFornecedor.value.possuiLoja,
        this.cadastroFornecedor.value.vendaParaAssociacao,
        this.cadastroFornecedor.value.todaProducao,
        this.cadastroFornecedor.value.parteProducao,
        this.cadastroFornecedor.value.ondeAtua,
        this.cadastroFornecedor.value.whatsapp,
        this.cadastroFornecedor.value.localizacao,
        this.cadastroFornecedor.value.produtosOfertado,
        this.cadastroFornecedor.value.website,
        this.cadastroFornecedor.value.credencialEspecial,
        this.cadastroFornecedor.value.vinculoAssociacao,
        this.cadastroFornecedor.value.nomeVinculo
      );
      console.log(this.cadastroFornecedor);
      console.log(fornecedor);
    }

  }

  ngOnInit(): void {
  }
}
