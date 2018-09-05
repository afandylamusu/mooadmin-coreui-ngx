import { Component, OnInit, Input } from '@angular/core';
import { Dictionary } from '../dictionary';
import { Field } from '../field-types';
import { Observable } from 'rxjs';

@Component({
    // tslintisable-next-line:component-selector
    selector: 'moo-vtable',
    templateUrl: './moo-vtable.component.html',
    styleUrls: ['./moo-vtable.component.scss']
})
export class MooVtableComponent implements OnInit {
    columns: Field[];

    @Input() onDelete :Function;

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

    delete(record){
        this.onDelete(record);
    }

    _dataSource$: Observable<any>;
    private modelSchema: Dictionary<Field>;


    ngOnInit() {
    }

}
