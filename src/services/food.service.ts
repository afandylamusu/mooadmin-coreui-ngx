import { Injectable } from '@angular/core';
import { Food } from './food';
import { ActiveRecord, ApiConfig } from '../lib/mooadmin-ngx/active-record';
import { Http } from '@angular/http';
import { Fields } from '../lib/mooadmin-ngx/field-types';

@Injectable()
export class FoodService extends ActiveRecord<Food> {
    constructor(public options: ApiConfig, public http: Http) {
        super(options, http, 'foods');

        this.api_url = 'http://localhost:5000/api/v1.0/Foods';

        this.modelSchema['Name'] = Fields.textField({
            inputType: 'text',
            label: 'Name',
            model: 'name',
            placeholder: 'Food Name',
            required: true
        });

    }

    protected processData(res) {
        return <Food[]>(res.json().value);
    }


}
