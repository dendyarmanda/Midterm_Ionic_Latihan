import { MyModalComponent } from './../components/my-modal/my-modal.component';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  message :string = 'Hello My Broo';
  constructor(private modalCtrl: ModalController) {}
   async openModal(){
      const modal = await this.modalCtrl.create({
        component:MyModalComponent,
        swipeToClose: false,
        showBackdrop: true,
        initialBreakpoint : 0.75,
        breakpoints: [0, 0.25, 0.5, 0.75]
      });
      modal.present();

      await modal.onWillDismiss().then((result)=>{
        this.message = `Hello,  ${result.data}`;
        console.log('Result ', result);

      });


   }
}
