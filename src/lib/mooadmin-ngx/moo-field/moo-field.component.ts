import { Component, OnInit, Input } from '@angular/core';
import { MooVformComponent } from '../moo-vform/moo-vform.component';
import { Field } from '../field-types';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'moo-field',
  templateUrl: './moo-field.component.html',
  styleUrls: ['./moo-field.component.scss']
})
export class MooFieldComponent implements OnInit {
  config: any;

  // tslint:disable-next-line:no-input-rename
  @Input('name')
  name: string;

  constructor(public form: MooVformComponent) {

  }

  ngOnInit() {
    this.config = this.form.modelSchema[this.name];
  }



}
