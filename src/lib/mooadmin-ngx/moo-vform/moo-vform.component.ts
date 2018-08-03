import { Component, OnInit } from '@angular/core';
import { ActiveRecord, Model } from '../active-record';
import { Field } from '../field-types';
import { Dictionary } from '../dictionary';
import { NgForm } from '@angular/forms';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'moo-vform',
    templateUrl: './moo-vform.component.html',
    styleUrls: ['./moo-vform.component.scss'],
})
export class MooVformComponent implements OnInit {
    service: ActiveRecord<Model>;
    modelSchema: Dictionary<Field>;

    constructor() {
    }

    ngOnInit() {
        this.modelSchema = this.service.modelSchema;
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngAfterViewInit() {
        // Called after ngOnInit when the component's or directive's content has been initialized.
        // Add 'implements AfterContentInit' to the class.

    }

    onSubmit(f: NgForm) {

    }

}
