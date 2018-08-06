import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { MooadminModule } from '../../../lib/mooadmin-ngx/mooadmin.module';
import { MooDemoRoutingModule } from './moo-demo-routing.module';
import { FoodsComponent } from './foods/foods.component';

@NgModule({
  imports: [
    CommonModule,
    MooDemoRoutingModule,
    MooadminModule
  ],
  declarations: [
      ContactComponent,
      FoodsComponent
  ]
})
export class MooDemoModule { }
