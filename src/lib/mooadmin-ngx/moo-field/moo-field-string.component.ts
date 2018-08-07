import { OnInit, Component, Input } from '@angular/core';
import { MooFieldComponent } from './moo-field.component';
import { StringField } from '../field-types';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'moo-field-string',
    template: `
        <ng-template>
            <label for="{{name}}">{{config.label}}</label>
            <input type="text" name="{{name}}" placeholder="{{config.placeholder}}" />
        </ng-template>
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
