import { Component, OnInit } from '@angular/core';
import { Vilao } from 'src/app/interfaces/vilao';
import { ViloesService } from 'src/app/services/viloes/viloes.service';

@Component({
  selector: 'app-viloes',
  templateUrl: './viloes.component.html',
  styleUrls: ['./viloes.component.scss']
})
export class ViloesComponent implements OnInit {

  viloes: Array<Vilao>;

  constructor(private viloesService: ViloesService) { 
    this.viloes = this.viloesService.get();
  }

  ngOnInit(): void { }

}
