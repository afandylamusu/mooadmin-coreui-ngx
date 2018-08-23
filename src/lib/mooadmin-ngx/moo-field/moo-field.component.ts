import { Component, OnInit, Input } from '@angular/core';
import { MooVformComponent } from '../moo-vform/moo-vform.component';
import { Field } from '../field-types';

@Component({
    // tslintisable-next-line:component-selector
    selector: 'moo-field',
    templateUrl: './moo-field.component.html',
    styleUrls: ['./moo-field.component.scss']
})
export class MooFieldComponent implements OnInit {
    config: Field;

    // tslintisable-next-line:no-input-rename
    @Input('name') name: string;

    private _stringFieldInputTypes: string[] = ['text', 'number', 'textarea', 'email', 'password'];
    private _boolFieldInputTypes: string[] = ['combobox', 'checkbox', 'radio'];

    get isBoolField():boolean{
        return this._boolFieldInputTypes.findIndex (x => x === this.config.inputType) >= 0;
    }
    
    get isStringField(): boolean {
        return this._stringFieldInputTypes.findIndex (x => x === this.config.inputType) >= 0;
    }

    
    constructor(public form: MooVformComponent) {

    }

    ngOnInit() {
        this.config = this.form.modelSchema[this.name];
    }



}
