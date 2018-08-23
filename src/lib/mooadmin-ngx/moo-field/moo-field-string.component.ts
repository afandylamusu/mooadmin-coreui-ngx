import { OnInit, Component, Input, ViewChild } from '@angular/core';
import { MooFieldComponent } from './moo-field.component';
import { StringField } from '../field-types';
import { NgModel, NgForm } from '@angular/forms';


@Component({
    // tslintisable-next-line:component-selector
    selector: 'moo-field-string',
    templateUrl: './moo-field-string.component.html'
})
export class MooFieldStringComponent implements OnInit {

    // tslintisable-next-line:no-input-rename
    @ViewChild(NgModel)
    model: NgModel;

    value: string;

    // tslintisable-next-line:no-input-rename
    _config: StringField;


    private _hasError: boolean;
    private _errorMessage: any = {
        required: 'Field is required',
        minlength: 'Has min length',
        emailPattern:'Not proper email'
    };

    get isTextArea(): boolean {
        return this._config.inputType === 'textarea';
    }

    constructor(public field: MooFieldComponent) { }
    ngOnInit() {
        this._config = this.field.config as StringField;
        this._hasError = false;
    }

    // tslintisable-next-line:use-life-cycle-interface
    ngAfterViewInit() {
        // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        // Add 'implements AfterViewInit' to the class.
        this.field.form.ngForm.addControl(this.model);
    }
}
