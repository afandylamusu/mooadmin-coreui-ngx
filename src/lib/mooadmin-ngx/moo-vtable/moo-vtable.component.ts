import { Component, OnInit, Input } from '@angular/core';
import { Dictionary } from '../dictionary';
import { Field } from '../field-types';
import { Model } from '../active-record';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'moo-vtable',
    templateUrl: './moo-vtable.component.html',
    styleUrls: ['./moo-vtable.component.scss']
})
export class MooVtableComponent implements OnInit {
    columns: Field[];

    load(data: any[]): any {
       this.dataSource = data;
    }

    setSchema(schema: any){
        this.modelSchema = schema;

        this.columns = Object.keys(this.modelSchema)
            .map(index=>{ return this.modelSchema[index]; })
            .filter((value)=>{
                return value.inputType != 'hidden';
            });
    }

    dataSource: any[];
    modelSchema: Dictionary<Field>;

    constructor() { }

    ngOnInit() {
    }

}
