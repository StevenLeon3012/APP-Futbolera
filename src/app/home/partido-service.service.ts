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
      eventos: ['00`: Inicio el partido',
                '10`: Goool! de Paris Saint-Germain',
                '25`: Amarilla! para Neymar',
                '30`: Goool! de Real Madrid',
                '40`: Goool! de Real Madrid',
                '80`: Goool! de Real Madrid'
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
      eventos: ['00`: Inicio el partido',
                '20`: Goool! de Liga Deportiva Alajuelense',
                '25`: Goool! de Liga Deportiva Alajuelense',
                '35`: Goool! de Deportivo Saprissa',
                '45`: Goool! de Liga Deportiva Alajuelense',
                '50`: Goool! de Deportivo Saprissa',
                '57`: Goool! de Liga Deportiva Alajuelense',
                '60`: Goool! de Liga Deportiva Alajuelense',
                '85`: Goool! de Deportivo Saprissa',
                '89`: Goool! de Deportivo Saprissa'
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
      eventos: ['00`: Inicio el partido'],
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
  deletePartido(pID: string){
    this.partidos = this.partidos.filter(
      partido =>  partido.id !== pID
    );
  }
}
