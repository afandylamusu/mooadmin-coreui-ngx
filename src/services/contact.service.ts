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
       // this.api_url = 'http://localhost:8080/api/contacts';

       /* 
       * String Field
       */ 
      this.modelSchema['id'] = Fields.hiddenField({
            inputType: 'hidden',
            model: 'id',
           // required: true
        });

        this.modelSchema['Name'] = Fields.textField({
            inputType: 'text',
            label: 'Name',
            model: 'name',
            placeholder: 'Full Name...',
            required: true,
            minlength: 3
        });
        

        this.modelSchema['Number'] = Fields.textField({
            inputType: 'number',
            label: 'Phone Number',
            model: 'number',
            placeholder: 'Phone Number',
            required: true,
            minlength: 8
        });
        
        this.modelSchema['Address'] = Fields.textField({
            inputType: 'text',
            label: 'Address',
            model: 'address',
            placeholder: 'Your Address',
            required: true,
            minlength: 10
        });

        this.modelSchema['Password'] = Fields.textField({
            inputType: 'password',
            label: 'Password',
            model: 'password',
            placeholder: 'Must be more than 8 character',
            required: true,
            minlength:8
        });
        
        this.modelSchema['Email'] = Fields.textField({
            inputType: 'email',
            label: 'Email ',
            model: 'email',
            placeholder: 'Email',
            required: true,
            pattern:'[^@]+@[^@]+\.[a-zA-Z]'
        });
       
        this.modelSchema['Explanation'] = Fields.textField({
            inputType: 'textarea',
            label: 'Explanation',
            model: 'explanation',
            row:5,
            col:5,
            placeholder: 'Your explanation goes here..',
            required: true,
          
        });
      /* 
       * Boolean Field
       */
         this.modelSchema['Radio'] = Fields.boolField({
            inputType: 'radio',
            label: 'Position ',
            choices:['Front end Engineer','Back end Engineer','Quality Asurance','Software Developer'],
            model: 'position',
            required: true,
        });

        this.modelSchema['Checkbox'] = Fields.boolField({
            inputType: 'checkbox',
            label: 'Experience',
            choices:['I Have ever internhip in another company before'],
            model: 'agreement',
            required: true,
        });

        this.modelSchema['Combobox'] = Fields.boolField({
            inputType: 'combobox',
            label: 'Total Month',
            choices:[2,3,4],
            model: 'totalMonth',
            required: true,
        });
    }
}
