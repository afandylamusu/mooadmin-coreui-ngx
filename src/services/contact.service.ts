import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { ActiveRecord, ApiConfig } from '../lib/mooadmin-ngx/active-record';
import { Contact } from './contact';
import { Fields } from '../lib/mooadmin-ngx/field-types';
import { Observable } from '../../node_modules/rxjs';

@Injectable()
export class ContactService extends ActiveRecord<Contact> {
    constructor(public options: ApiConfig, public http: Http) {
        super(options, http, 'contacts');

        this.modelSchema['id'] = Fields.hiddenField({
            inputType: 'hidden',
            model: 'id',
            required: true
        });

        this.modelSchema['name'] = Fields.textField({
            inputType: 'text',
            label: 'Name',
            model: 'name',
            placeholder: 'ini place holder',
            required: true
        });

        this.modelSchema['number'] = Fields.textField({
            inputType: 'number',
            label: 'Number',
            model: 'number',
            placeholder: 'ini number',
            required: true
        });
    }
}
