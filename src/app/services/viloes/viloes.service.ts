import { Injectable } from '@angular/core';
import { Vilao } from 'src/app/interfaces/vilao';

@Injectable({
  providedIn: 'root'
})
export class ViloesService {

  viloes: Array<Vilao>;

  constructor() { 
    this.viloes = [
      {
        id: 1,
        nome: 'RA\'S AL GHUL',
      },
      {
        id: 2,
        nome: 'SENHOR FRIO',
      },
      {
        id: 3,
        nome: 'CORINGA',
      },
      {
        id: 4,
        nome: 'CROCODILO',
      },
      {
        id: 5,
        nome: 'ESPANTALHO',
      },
      {
        id: 6,
        nome: 'HERA VENENOSA',
      },
      {
        id: 7,
        nome: 'ARLEQUINA',
      },
      {
        id: 8,
        nome: 'DUAS CARAS',
      },
      {
        id: 9,
        nome: 'PINGUIM',
      },
      {
        id: 10,
        nome: 'BANE',
      },
      {
        id: 11,
        nome: 'CHARADA',
      },
      {
        id: 12,
        nome: 'MULHER GATO',
      },
    ];
  }

  get() {
    return this.viloes;
  }

  getById(id: number) {
    return this.viloes.find( vilao => vilao.id === id );
  }
  
}
