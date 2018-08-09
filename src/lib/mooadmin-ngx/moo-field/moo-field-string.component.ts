import { OnInit, Component, Input, ViewChild } from '@angular/core';
import { MooFieldComponent } from './moo-field.component';
import { StringField } from '../field-types';
import { NgModel, NgForm } from '@angular/forms';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'moo-field-string',
    templateUrl: './moo-field-string.component.html'
})
export class MooFieldStringComponent implements OnInit {

    // tslint:disable-next-line:no-input-rename
    @ViewChild(NgModel)
    model: NgModel;

    value: string;

    // tslint:disable-next-line:no-input-rename
    private _config: StringField;


    private _hasError: boolean;
    private _errorMessage: any = {
        required: 'String input is required',
        minlength: 'Has min length'
    };

    get isTextArea(): boolean {
        return this._config.inputType === 'textarea';
    }

    constructor(public field: MooFieldComponent) { }
    ngOnInit() {
        this._config = this.field.config as StringField;
        this._hasError = false;
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngAfterViewInit() {
        // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        // Add 'implements AfterViewInit' to the class.
        this.field.form.ngForm.addControl(this.model);
    }
}
