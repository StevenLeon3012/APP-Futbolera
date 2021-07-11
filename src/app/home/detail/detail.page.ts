import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Partido } from '../home.model';
import { PartidoServiceService } from '../partido-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  partido: Partido;
  constructor(
    private activatedRoutes: ActivatedRoute,
    private partidoServicio: PartidoServiceService
  ) { }

  ngOnInit() {
    this.activatedRoutes.paramMap.subscribe(
      paramMap =>{
        if(!paramMap.has('partidoId')){
          return;
        }
        const partidoId = paramMap.get('partidoId');
        this.partido = this.partidoServicio.getPartido(partidoId);
      }
    );
  }

}
