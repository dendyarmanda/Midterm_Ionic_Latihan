import { IonicModule } from '@ionic/angular';
import { MyModalComponent } from './my-modal/my-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [MyModalComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ],exports:[
    MyModalComponent
  ]
})
export class ComponentsModule { }
