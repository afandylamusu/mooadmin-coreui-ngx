import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { MooadminModule } from '../../../lib/mooadmin-ngx/mooadmin.module';
import { MooDemoRoutingModule } from './moo-demo-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MooDemoRoutingModule,
    MooadminModule
  ],
  declarations: [
      ContactComponent
  ]
})
export class MooDemoModule { }
