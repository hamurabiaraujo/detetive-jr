import { Injectable } from '@angular/core';
import { Vilao } from 'src/app/interfaces/vilao';

@Injectable({
  providedIn: 'root'
})
export class EnvelopeService {

  private _viloes: Array<Vilao>;

  constructor() { 
    this._viloes = [];
  }

  get viloes() {
    return this._viloes;
  }

  set viloes(viloes: Array<Vilao>) {
    this._viloes = viloes;
  }
}
