import { Injectable } from '@angular/core';
import { Local } from 'src/app/interfaces/local';
import { EnvelopeService } from '../envelope/envelope.service';
import { ViloesService } from '../viloes/viloes.service';

@Injectable({
  providedIn: 'root'
})
export class LocaisService {

  locais: Array<Local>;

  constructor(
    private viloesService: ViloesService,
    private envelopeService: EnvelopeService,
  ) { 
    this.locais = [
      {
        id: 1,
        nome: 'BATCAVERNA',
      },
      {
        id: 2,
        nome: 'TOPO DO PRÉDIO',
      },
      {
        id: 3,
        nome: 'RUA DE GOTHAM',
      },
      {
        id: 4,
        nome: 'TÚNEL',
      },
      {
        id: 5,
        nome: 'LETREIRO DE GOTHAM',
      },
      {
        id: 6,
        nome: 'BAT-SINAL',
      },
      {
        id: 7,
        nome: 'ASILO ARKHAM',
      },
      {
        id: 8,
        nome: 'DOCA DE GOTHAM',
      },
      {
        id: 9,
        nome: 'BANCO',
      },
      {
        id: 10,
        nome: 'BECO',
      },
    ]
  }

  get() {
    return this.locais;
  }

  getById(id: number) {
    return this.locais.find( local => id === local.id );
  }

  sortearViloes() {
    const viloes = this.viloesService.get();
    viloes.sort(() => Math.random() - 0.5);
    
    console.log(viloes);

    // preenchendo os locais com os vilões embaralhados
    const locaisComViloes = this.locais.map( (local, index) => {
      local.vilao = viloes[index];
      return local;
    });

    this.locais = locaisComViloes;

    const quantidadeViloes = viloes.length;
    //atualizando o evelope com os 2 últimos vilões embaralhados
    this.envelopeService.viloes = [viloes[quantidadeViloes - 1], viloes[quantidadeViloes - 2]];
  }
}
