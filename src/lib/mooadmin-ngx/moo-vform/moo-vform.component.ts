import { Component, OnInit } from '@angular/core';
import { ActiveRecord, Model } from '../active-record';
import { Field } from '../field-types';

@Component({
  selector: 'moo-vform',
  templateUrl: './moo-vform.component.html',
  styleUrls: ['./moo-vform.component.scss']
})
export class MooVformComponent implements OnInit {
  Service: ActiveRecord<Model>;
  ModelSchema: Field[];

  constructor(service: ActiveRecord<Model>) { 
    this.Service = service;
    this.ModelSchema = service.modelSchema;
  }

  ngOnInit() {
  }

}
