import { Injectable } from '@angular/core';
import { Partido } from './home.model';

@Injectable({
  providedIn: 'root'
})
export class PartidoServiceService {

  private partidos: Partido[] = [
    {
      id: '1',
      equipoCasa: 'Paris Saint-Germain',
      equipoVisitante: 'Real Madrid',
      marcador: {'equipo1' : 1, 'equipo2': 4},
      logoEquipoCasa: 'assets/Images/Paris_img.png',
      logoEquipoVisitante: 'assets/Images/Real_Madrid_img.png',
      eventos: ['Inicio el partido',
                'Goool! de Paris Saint-Germain',
                'Amarilla! para Neymar',
                'Goool! de Real Madrid',
                'Goool! de Real Madrid',
                'Goool! de Real Madrid'
                ],
      estado: 'En curso'
    },
    {
      id: '2',
      equipoCasa: 'Liga Deportiva Alajuelense',
      equipoVisitante: 'Deportivo Saprissa',
      marcador: {'equipo1' : 5, 'equipo2': 4},
      logoEquipoCasa: 'assets/Images/Liga_img.png',
      logoEquipoVisitante: 'assets/Images/Saprissa_img.png',
      eventos: ['Inicio el partido',
                'Goool! de Liga Deportiva Alajuelense',
                'Goool! de Liga Deportiva Alajuelense',
                'Goool! de Deportivo Saprissa',
                'Goool! de Liga Deportiva Alajuelense',
                'Goool! de Deportivo Saprissa',
                'Goool! de Liga Deportiva Alajuelense',
                'Goool! de Liga Deportiva Alajuelense',
                'Goool! de Deportivo Saprissa',
                'Goool! de Deportivo Saprissa'
                ],
      estado: 'En curso'
    },
    {
      id: '3',
      equipoCasa: 'Bayern Munich',
      equipoVisitante: 'Borussia Dortmund',
      marcador: {'equipo1' : 0, 'equipo2': 0},
      logoEquipoCasa: 'assets/Images/Bayer_img.png',
      logoEquipoVisitante: 'assets/Images/Borussia_Dortmund_img.png',
      eventos: ['Inicio el partido'],
      estado: 'En curso'
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
        partido => {
         return ID === partido.id }
      )};
  }
}
