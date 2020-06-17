import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';

import { RoutingModule } from './routing/routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './navigation/header/header.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CompradorComponent } from './conecte-se/comprador/comprador.component';
import { TransportadorComponent } from './conecte-se/transportador/transportador.component';
import { PlataformaDistribuicaoComponent } from './conecte-se/plataforma-distribuicao/plataforma-distribuicao.component';
import { OngComponent } from './conecte-se/ong/ong.component';
import { MapaComponent } from './mapa/mapa.component';
import { DuvidasComunsComponent } from './duvidas-comuns/duvidas-comuns.component';
import { PesquisaMapaComponent } from './mapa/pesquisa-mapa/pesquisa-mapa.component';
import { FornecedorComponent } from './conecte-se/fornecedor/fornecedor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ApresentacaoComponent,
    HeaderComponent,
    FooterComponent,
    CompradorComponent,
    TransportadorComponent,
    PlataformaDistribuicaoComponent,
    OngComponent,
    MapaComponent,
    DuvidasComunsComponent,
    PesquisaMapaComponent,
    FornecedorComponent,
    
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
