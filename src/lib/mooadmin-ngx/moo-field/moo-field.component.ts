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
  Name: string;

  constructor(name: string, form: MooVformComponent) { 
    this.Form = form;
  }

  ngOnInit() {
    this.FieldSchema = this.Form.ModelSchema[this.Name];
  }

}
