import { Component, OnInit } from '@angular/core';
import { MooVformComponent } from '../moo-vform/moo-vform.component';
import { Field } from '../field-types';

@Component({
  selector: 'moo-field',
  templateUrl: './moo-field.component.html',
  styleUrls: ['./moo-field.component.scss']
})
export class MooFieldComponent implements OnInit {
  Form: MooVformComponent;
  FieldSchema: Field;

  constructor(name: string, form: MooVformComponent) { 
    this.Form = form;
    this.FieldSchema = form.ModelSchema[name];
  }

  ngOnInit() {
  }

}
