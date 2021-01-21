import { Component, OnInit } from '@angular/core';
import { Local } from 'src/app/interfaces/local';
import { LocaisService } from 'src/app/services/locais/locais.service';

@Component({
  selector: 'app-locais',
  templateUrl: './locais.component.html',
  styleUrls: ['./locais.component.scss']
})
export class LocaisComponent implements OnInit {

  locais: Array<Local>;

  constructor(private locaisService: LocaisService) { 
    this.locaisService.sortearViloes();
    this.locais = this.locaisService.get();
  }

  ngOnInit(): void {}

}
