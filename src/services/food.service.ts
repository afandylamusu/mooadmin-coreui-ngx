import { Injectable } from '@angular/core';
import { Food } from './food';
import { ActiveRecord, ApiConfig } from '../lib/mooadmin-ngx/active-record';
import { Http } from '@angular/http';
import { Fields } from '../lib/mooadmin-ngx/field-types';

@Injectable()
export class FoodService extends ActiveRecord<Food> {
  constructor(public options: ApiConfig, public http: Http) {
    super(options, http, 'foods');

    this.modelSchema['Name'] = Fields.textField({
      type: 'input',
      inputType: 'text',
      label: 'Name',
      model: 'name',
      placeholder: 'Food Name',
      required: true
    });
    
  }

 
}
