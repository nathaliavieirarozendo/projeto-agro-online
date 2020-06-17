import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { plataforma_distribuicao } from './plataforma-distribuicao';

@Component({
  selector: 'app-plataforma-distribuicao',
  templateUrl: './plataforma-distribuicao.component.html',
  styleUrls: ['./plataforma-distribuicao.component.css']
})
export class PlataformaDistribuicaoComponent implements OnInit {

  cadastroPlatDistribuicao: FormGroup;
  
  nome: string;
  cpfCnpj: string;
  representante: string;
  conectaConsumidorComercio: string;
  conectafeiranteCOnsumidores: string;
  solucoesLogisticaGrandesCargas: string;
  solucoesLogisticaPequenasCargas: string;
  solucaoIntegracao: string;
  vendoProducaoAssociacao: string;
  solucoesAssociacoes: string;
  outroTipoSolucao: string;
  ondeAtua: string;
  whatsapp: string;
  localizacao: string;
  website: string;
  credenciaisEspeciais: string;
  vinculoAssociacao = new FormControl();
  nomeAssociacao: string;

  constructor(formBuilder: FormBuilder) {
    this.cadastroPlatDistribuicao = formBuilder.group({
      'nome': [null, Validators.required],
      'cpfCnpj': [null, Validators.required],
      'representante': [null, Validators.required],
      'conectaConsumidorComercio': [null],
      'conectafeiranteCOnsumidores': [null],
      'solucoesLogisticaGrandesCargas': [null],
      'solucoesLogisticaPequenasCargas': [null],
      'solucaoIntegracao': [null],
      'vendoProducaoAssociacao': [null],
      'solucoesAssociacoes': [null],
      'outroTipoSolucao': [null],
      'ondeAtua': [null, Validators.required],
      'whatsapp': [null, Validators.required],
      'localizacao': [null],
      'website': [null],
      'credenciaisEspeciais': [null],
      'vinculoAssociacao': [null],
      'nomeAssociacao': [null]
    });
  }

  cadastrar() {
    if (this.cadastroPlatDistribuicao.status === 'INVALID') {
      this.cadastroPlatDistribuicao.get('nome').markAsTouched;
      this.cadastroPlatDistribuicao.get('cpfCnpj').markAsTouched;
      this.cadastroPlatDistribuicao.get('representante').markAsTouched;
      this.cadastroPlatDistribuicao.get('ondeAtua').markAsTouched;
      this.cadastroPlatDistribuicao.get('whatsapp').markAsTouched;
    } else {
      let compradorCadastro: plataforma_distribuicao = new plataforma_distribuicao(
        this.cadastroPlatDistribuicao.value.nome,
        this.cadastroPlatDistribuicao.value.cpfCnpj,
        this.cadastroPlatDistribuicao.value.representante,
        this.cadastroPlatDistribuicao.value.conectaConsumidorComercio,
        this.cadastroPlatDistribuicao.value.conectafeiranteCOnsumidores,
        this.cadastroPlatDistribuicao.value.solucoesLogisticaGrandesCargas,
        this.cadastroPlatDistribuicao.value.solucoesLogisticaPequenasCargas,
        this.cadastroPlatDistribuicao.value.solucaoIntegracao,
        this.cadastroPlatDistribuicao.value.vendoProducaoAssociacao,
        this.cadastroPlatDistribuicao.value.solucoesAssociacoes,
        this.cadastroPlatDistribuicao.value.outroTipoSolucao,
        this.cadastroPlatDistribuicao.value.ondeAtua,
        this.cadastroPlatDistribuicao.value.whatsapp,
        this.cadastroPlatDistribuicao.value.localizacao,
        this.cadastroPlatDistribuicao.value.website,
        this.cadastroPlatDistribuicao.value.credenciaisEspeciais,
        this.cadastroPlatDistribuicao.value.vinculoAssociacao,
        this.cadastroPlatDistribuicao.value.nomeAssociacao
      );
      console.log(this.cadastroPlatDistribuicao);
      console.log(plataforma_distribuicao);
    }
  }
  
  ngOnInit() {
    
  }

}
