import { OnInit, Component, Input, ViewChild } from '@angular/core';
import { MooFieldComponent } from './moo-field.component';
import { BooleanField } from '../field-types';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'moo-field-bool',
    templateUrl: './moo-field-boolean.component.html'
})
export class MooFieldBooleanComponent implements OnInit {

    // tslint:disable-next-line:no-input-rename
    @ViewChild(NgModel)
    model: NgModel;

    value: string;

    // tslint:disable-next-line:no-input-rename
    _config: BooleanField;

    private _hasError: boolean;
    private _errorMessage: any = {
        required: 'Field is required',

    };

     get isComboBox(): boolean {
         return this._config.inputType === 'combobox';
     }

     get isCheckbox(): boolean {
        return this._config.inputType === 'checkbox';
    }
    get isRadio(): boolean {
        return this._config.inputType === 'radio';
    }

    constructor(public field: MooFieldComponent) { }
    ngOnInit() {
        this._config = this.field.config as BooleanField;
        this._hasError = false;
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngAfterViewInit() {
        // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        // Add 'implements AfterViewInit' to the class.
        this.field.form.ngForm.addControl(this.model);
    }
}
