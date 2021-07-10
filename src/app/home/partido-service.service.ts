import { Injectable } from '@angular/core';
import { Partido } from './home.model';

@Injectable({
  providedIn: 'root'
})
export class PartidoServiceService {

  private partidos: Partido[] = [
    {
      id: "1",
      equipoCasa: "Paris",
      equipoVisitante: "Real Madrid",
      marcador: {'equipo1' : 1, 'equipo2': 4},
      logoEquipoCasa: "assets/Images/Paris_img.png",
      logoEquipoVisitante: "assets/Images/Real_Madrid_img.png",
      eventos: ["Inicio el partido"],
      estado: "En curso"
    },
    {
      id: "2",
      equipoCasa: "Liga",
      equipoVisitante: "Saprissa",
      marcador: {'equipo1' : 5, 'equipo2': 4},
      logoEquipoCasa: "assets/Images/Liga_img.png",
      logoEquipoVisitante: "assets/Images/Saprissa_img.png",
      eventos: ["Inicio el partido"],
      estado: "En curso"
    },
    {
      id: "3",
      equipoCasa: "Bayer",
      equipoVisitante: "Borussia",
      marcador: {'equipo1' : 0, 'equipo2': 0},
      logoEquipoCasa: "assets/Images/Bayer_img.png",
      logoEquipoVisitante: "assets/Images/Borussia_Dortmund_img.png",
      eventos: ["Inicio el partido"],
      estado: "En curso"
    }
  ];

  constructor() { }
//Agarrar todos los partidos
  getAll(){
    return [...this.partidos];
  }
//Agarrar un soo partido por id
  getPartido(ID: string){
    return {...this.partidos.find(
      (partido) => {
         return ID === partido.id }
      )};
  }
}
