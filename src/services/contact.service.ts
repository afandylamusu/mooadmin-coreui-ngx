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

        this.api_url = 'http://11.11.7.111:8080/api/contacts';

        this.modelSchema['id'] = Fields.hiddenField({
            inputType: 'hidden',
            model: 'id',
            required: true
        });

        this.modelSchema['Name'] = Fields.textField({
            inputType: 'text',
            label: 'Name',
            model: 'name',
            placeholder: 'ini place holder',
            required: false,
            //minlength: 5
        });
        
        this.modelSchema['Feedback'] = Fields.textField({
            inputType: 'textarea',
            label: 'Feedback',
            model: 'feedback',
            row:2,
            col:5,
            placeholder: 'ini place holder',
            required: false,
          
        });

        this.modelSchema['Number'] = Fields.textField({
            inputType: 'number',
            label: 'Phone Number',
            model: 'phone',
            placeholder: 'ini number',
          //  required: true,
          //  minlength: 10
        });
        
        this.modelSchema['Address'] = Fields.textField({
            inputType: 'text',
            label: 'Address',
            model: 'addres',
            placeholder: 'ini place holder',
            //required: true,
            //minlength: 20
        });

        this.modelSchema['Password'] = Fields.textField({
            inputType: 'password',
            label: 'Password',
            model: 'password',
            placeholder: 'ini password',
            //required: true,
            //minlength:8
        });
        
        this.modelSchema['Email'] = Fields.textField({
            inputType: 'email',
            label: 'Office Email ',
            model: 'email',
            placeholder: 'ini email',
            //required: true,
            //pattern:'[^@]+@[^@]+\.[a-zA-Z]'
        });
    }
}
