import { OnInit, Component, Input } from '@angular/core';
import { MooFieldComponent } from './moo-field.component';
import { StringField } from '../field-types';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'moo-field-string',
    template: `
        <input type="text" name="{{name}}" placeholder="{{config.placeholder}}" />
    `
})
export class MooFieldStringComponent implements OnInit {

    // tslint:disable-next-line:no-input-rename
    @Input('name')
    name: string;

    // tslint:disable-next-line:no-input-rename
    @Input('config')
    config: StringField;

    constructor(public field: MooFieldComponent) { }
    ngOnInit() {
    }
}
