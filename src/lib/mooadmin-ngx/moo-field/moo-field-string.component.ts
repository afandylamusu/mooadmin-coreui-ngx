import { OnInit, Component, Input } from '@angular/core';
import { MooFieldComponent } from './moo-field.component';
import { StringField } from '../field-types';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'moo-field-string',
    template: `
            <label for="{{_config.model}}">{{_config.label}}</label>
            <input type="text" name="{{_config.model}}" placeholder="{{_config.placeholder}}" />
    `
})
export class MooFieldStringComponent implements OnInit {

    // tslint:disable-next-line:no-input-rename
    // @Input('name')
    // name: string;

    // tslint:disable-next-line:no-input-rename
    private _config: StringField;

    constructor(public field: MooFieldComponent) {  }
    ngOnInit() {
        this._config = this.field.config as StringField;
    }
}
