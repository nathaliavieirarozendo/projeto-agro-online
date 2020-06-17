import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ApresentacaoComponent } from '../apresentacao/apresentacao.component';
import { CompradorComponent } from '../conecte-se/comprador/comprador.component';
import { TransportadorComponent } from '../conecte-se/transportador/transportador.component';
import { PlataformaDistribuicaoComponent } from '../conecte-se/plataforma-distribuicao/plataforma-distribuicao.component';
import { OngComponent } from '../conecte-se/ong/ong.component';
import { MapaComponent } from '../mapa/mapa.component';
import { DuvidasComunsComponent } from '../duvidas-comuns/duvidas-comuns.component';
import { FornecedorComponent } from '../conecte-se/fornecedor/fornecedor.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', redirectTo: '', pathMatch: 'full'},
  {path: 'apresentacao', component: ApresentacaoComponent},
  {path: 'comprador', component: CompradorComponent},
  {path: 'fornecedor', component: FornecedorComponent},
  {path: 'transportador', component: TransportadorComponent},
  {path: 'plataforma-distribuicao', component: PlataformaDistribuicaoComponent},
  {path: 'ong', component: OngComponent},
  {path: 'mapa', component: MapaComponent},
  {path: 'duvidas-comuns', component: DuvidasComunsComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
})
export class RoutingModule { }
