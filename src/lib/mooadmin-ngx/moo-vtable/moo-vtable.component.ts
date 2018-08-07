import { Component, OnInit, Input } from '@angular/core';
import { Dictionary } from '../dictionary';
import { Field } from '../field-types';
import { Model } from '../active-record';
import { Observable } from '../../../../node_modules/rxjs';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'moo-vtable',
    templateUrl: './moo-vtable.component.html',
    styleUrls: ['./moo-vtable.component.scss']
})
export class MooVtableComponent implements OnInit {
    columns: Field[];

    setDataSource(data: Observable<any>) {
       this._dataSource$ = data;
    }

    setSchema(schema: any){
        this._modelSchema = schema;

        this.columns = Object.keys(this._modelSchema)
            .map(index=>{ return this._modelSchema[index]; })
            .filter((value)=>{
                return value.inputType != 'hidden';
            });
    }

    private _dataSource$: Observable<any>;
    private _modelSchema: Dictionary<Field>;

    constructor() { }

    ngOnInit() {
    }

}
