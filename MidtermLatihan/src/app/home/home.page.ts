import { MyModalComponent } from './../components/my-modal/my-modal.component';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalCtrl: ModalController) {}
   async openModal(){
      const modal = await this.modalCtrl.create({
        component:MyModalComponent
      });
      modal.present();

      const {data,role} =  await modal.onWillDismiss();

      console.log("Data ", data);
      console.log("Role ", role);

   }
}
