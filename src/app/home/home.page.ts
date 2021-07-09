import { Component} from '@angular/core';
import { Partido } from './home.model'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
  partidos: Partido[] = [
    {
      id: "1",
      equipoCasa: "Paris",
      equipoVisitante: "Real Madrid",
      marcador: {'equipo1' : 1, 'equipo2': 4},
      eventos: ["Inicio el partido"],
      estado: "En curso"
    },
    {
      id: "2",
      equipoCasa: "Liga",
      equipoVisitante: "Saprissa",
      marcador: {'equipo1' : 5, 'equipo2': 4},
      eventos: ["Inicio el partido"],
      estado: "En curso"
    },
    {
      id: "3",
      equipoCasa: "Bayer",
      equipoVisitante: "Borussia",
      marcador: {'equipo1' : 0, 'equipo2': 0},
      eventos: ["Inicio el partido"],
      estado: "En curso"
    }
  ];

  constructor() {}

  cambiar(){
     document.getElementById('toggle').setAttribute('disabled' , 'true');
     document.getElementById('toggle').setAttribute('color' , 'danger');
     this.partidos[0].estado = "Finalizado";
   }
}
