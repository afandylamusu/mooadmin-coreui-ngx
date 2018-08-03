import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MooVformComponent } from './moo-vform/moo-vform.component';
import { MooFieldComponent } from './moo-field/moo-field.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    HttpModule
  ],
  declarations: [
    MooVformComponent,
    MooFieldComponent
  ],
  exports: [HttpClientModule, HttpModule, MooVformComponent, MooFieldComponent]
})
export class MooadminModule {

}
