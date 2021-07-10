import { Component } from '@angular/core';
import { Partido } from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  partidos: Partido[] = [
    {
      id: '1',
      equipoCasa: 'Paris Saint-Germain',
      equipoVisitante: 'Real Madrid',
      logoEquipoCasa: 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c4d8.png',
      logoEquipoVisitante: 'https://logos-world.net/wp-content/uploads/2020/06/Real-Madrid-Logo.png',
      marcador: {'equipo1' : 1, 'equipo2': 4},
      eventos: ['Inicio el partido',
                'Goool! de Paris Saint-Germain',
                'Amarilla! para Neymar',
                'Goool! de Real Madrid',
                'Goool! de Real Madrid',
                'Goool! de Real Madrid',
                'Fin del partido'
                ],
      estado: 'En curso'
    },
    {
      id: '2',
      equipoCasa: 'Liga Deportiva Alajuelense',
      equipoVisitante: 'Deportivo Saprissa',
      logoEquipoCasa: 'https://www.lda.cr/assets/bf58b018.png',
      logoEquipoVisitante: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Escudo_del_Deportivo_Saprissa.png',
      marcador: {'equipo1' : 5, 'equipo2': 4},
      eventos: ['Inicio el partido',
                'Goool! de Liga Deportiva Alajuelense',
                'Goool! de Liga Deportiva Alajuelense',
                'Goool! de Deportivo Saprissa',
                'Goool! de Liga Deportiva Alajuelense',
                'Goool! de Deportivo Saprissa',
                'Goool! de Liga Deportiva Alajuelense',
                'Goool! de Liga Deportiva Alajuelense',
                'Goool! de Deportivo Saprissa',
                'Goool! de Deportivo Saprissa',
                'Fin del partido'
                ],
      estado: 'En curso'
    },
    {
      id: '3',
      equipoCasa: 'Bayern Munich',
      equipoVisitante: 'Borussia Dortmund',
      logoEquipoCasa: 'http://assets.stickpng.com/images/584d8683367b6a13e54477d4.png',
      logoEquipoVisitante: 'https://logodownload.org/wp-content/uploads/2017/02/bvb-borussia-dortmund-logo-1.png',
      marcador: {'equipo1' : 0, 'equipo2': 0},
      eventos: ['Inicio el partido', 'Fin del partido'],
      estado: 'En curso'
    }
  ];
  constructor() {}


}
