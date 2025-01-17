import { Injectable } from '@angular/core';
import { Local } from 'src/app/interfaces/local';
import { Vilao } from 'src/app/interfaces/vilao';
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
        revelado: false,
      },
      {
        id: 2,
        nome: 'TOPO DO PRÉDIO',
        revelado: false,
      },
      {
        id: 3,
        nome: 'RUA DE GOTHAM',
        revelado: false,
      },
      {
        id: 4,
        nome: 'TÚNEL',
        revelado: false,
      },
      {
        id: 5,
        nome: 'LETREIRO DE GOTHAM',
        revelado: false,
      },
      {
        id: 6,
        nome: 'BAT-SINAL',
        revelado: false,
      },
      {
        id: 7,
        nome: 'ASILO ARKHAM',
        revelado: false,
      },
      {
        id: 8,
        nome: 'DOCA DE GOTHAM',
        revelado: false,
      },
      {
        id: 9,
        nome: 'BANCO',
        revelado: false,
      },
      {
        id: 10,
        nome: 'BECO',
        revelado: false,
      },
    ]
  }

  get() {
    return this.locais;
  }

  getById(id: number) {
    return this.locais.find( local => id === local.id );
  }

  // https://stackoverflow.com/a/2450976/5636215
  private shuffle(array: Vilao[]) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  sortearViloes() {
    const viloes = this.viloesService.get();
    const viloesSorteados = this.shuffle( [...viloes] );

    // preenchendo os locais com os vilões embaralhados
    const locaisComViloes = this.locais.map( (local, index) => {
      local.vilao = viloesSorteados[index];
      return local;
    });

    this.locais = locaisComViloes;

    const quantidadeViloes = viloes.length;
    
    //atualizando o evelope com os 2 últimos vilões embaralhados
    this.envelopeService.viloes = [
      viloesSorteados[quantidadeViloes - 2], 
      viloesSorteados[quantidadeViloes - 1]
    ];
  }
}
