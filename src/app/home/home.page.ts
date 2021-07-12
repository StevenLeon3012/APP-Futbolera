import { Component, OnInit } from '@angular/core';
import { Partido } from './home.model';
import { PartidoServiceService } from './partido-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  partidos: Partido[];
  constructor(private homeService: PartidoServiceService) {}

  ngOnInit(){
    this.partidos = this.homeService.getAll();
  }
  ionViewWillEnter(){
    this.partidos =  this.homeService.getAll();
  }
}
