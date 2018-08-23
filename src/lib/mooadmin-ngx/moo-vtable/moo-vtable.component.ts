import { Component, OnInit, Input } from '@angular/core';
import { Dictionary } from '../dictionary';
import { Field } from '../field-types';
import { Model } from '../active-record';
import { Observable } from '../../../../node_modules/rxjs';
import { ContactService } from '../../../services/contact.service';

@Component({
    // tslintisable-next-line:component-selector
    selector: 'moo-vtable',
    templateUrl: './moo-vtable.component.html',
    styleUrls: ['./moo-vtable.component.scss']
})
export class MooVtableComponent implements OnInit {
    columns: Field[];
    
    @Input() callbackTable :Function;
    
    setDataSource(data: Observable<any>) {
       this._dataSource$ = data;
    }
    
    setSchema(schema: any){
        this.modelSchema = schema;

        this.columns = Object.keys(this.modelSchema)
            .map(index=>{ return this.modelSchema[index]; })
            .filter((value)=>{
                return value.inputType != 'hidden';
            });
    }
    public delete(id){
        this.callbackTable(id);
    }

    private _dataSource$: Observable<any>;
    private modelSchema: Dictionary<Field>;


    ngOnInit() {
    }

}