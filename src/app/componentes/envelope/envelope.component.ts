import { Component, OnInit } from '@angular/core';
import { Vilao } from 'src/app/interfaces/vilao';
import { EnvelopeService } from 'src/app/services/envelope/envelope.service';

@Component({
  selector: 'app-envelope',
  templateUrl: './envelope.component.html',
  styleUrls: ['./envelope.component.scss']
})
export class EnvelopeComponent implements OnInit {

  viloes: Array<Vilao>;

  constructor(private envelopeService: EnvelopeService) { 
    this.viloes = this.envelopeService.viloes;
  }

  ngOnInit(): void {}

}
