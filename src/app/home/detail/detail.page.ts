import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Partido } from '../home.model';
import { PartidoServiceService } from '../partido-service.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  partido: Partido;
  constructor(
    private activatedRoutes: ActivatedRoute,
    private partidoServicio: PartidoServiceService,
    private alertCtrl: AlertController,
    private router: Router
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

  cambiar(){
    document.getElementById('toggle').setAttribute('disabled' , 'true');
    this.partido.estado = 'Finalizado';
  }
  delete(){
    if(this.partido.estado === 'Finalizado'){
      this.alertCtrl.create({
        header: "Borrar",
        message: "Esta seguro que desea borrar este partido?",
        buttons:[
          {
            text: "Cancelar",
            role: 'cancel'
          },
          {
            text: 'Borrar',
            handler: () => {
              this.partidoServicio.deletePartido(this.partido.id);
              this.router.navigate(['/home']);
            }
          }
        ]
      }).then(
        alertElement => {
          alertElement.present();
        }
      );
    }else{
      this.alertCtrl.create({
        header: 'Alerta',
        message: 'No se puede eliminar un partido en curso',
        buttons:[{
          text: 'Aceptar',
          role: 'cancel'
        }]
      }).then(
        alertElement => {
          alertElement.present();
        }
      );
    }
  }
}
