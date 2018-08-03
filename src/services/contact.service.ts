import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { ActiveRecord, ApiConfig } from '../lib/mooadmin-ngx/active-record';
import { Contact } from './contact';

@Injectable()
export class ContactService extends ActiveRecord<Contact> {
    constructor(public options: ApiConfig, public http: Http) {
        super(options, http, 'contacts');

        this.modelSchema["Name"] = {
            type: "input",
            inputType: "text",
            label: "Name",
            model: "name",
            placeholder: "Your name",
            featured: true,
            required: true
        };
    }
}
