import { OnInit, Component, Input } from '@angular/core';
import { MooFieldComponent } from './moo-field.component';
import { StringField } from '../field-types';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'moo-field-string',
    templateUrl: './moo-field-string.component.html'
})
export class MooFieldStringComponent implements OnInit {

    // tslint:disable-next-line:no-input-rename
    // @Input('name')
    // name: string;

    // tslint:disable-next-line:no-input-rename
    private _config: StringField;
    private _requiredStr: string;

    private _placeholder: string;

    private _hasError: boolean;
    private _errorMessage: {
        required: 'String input is required',
        minlength: 'Has min length'
    };

    constructor(public field: MooFieldComponent) {  }
    ngOnInit() {
        this._config = this.field.config as StringField;
        this._hasError = false;

        if (this._config.required)
            this._requiredStr = 'required';

        if (this._config.placeholder !== undefined)
            this._placeholder = this._config.placeholder;


    }
}
