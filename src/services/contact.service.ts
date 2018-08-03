import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { ActiveRecord, ApiConfig } from '../lib/mooadmin-ngx/active-record';
import { Contact } from './contact';
import { Field, Fields } from '../lib/mooadmin-ngx/field-types';
import { Dictionary } from '../lib/mooadmin-ngx/dictionary';

@Injectable()
export class ContactService extends ActiveRecord<Contact> {
    constructor(public options: ApiConfig, public http: Http) {
        super(options, http, 'contacts');

        this.modelSchema['Name'] = Fields.textField({
            type: 'input',
            inputType: 'text',
            label: 'Name',
            model: 'name',
            placeholder: 'ini place holder',
            required: true
        });
    }
}
