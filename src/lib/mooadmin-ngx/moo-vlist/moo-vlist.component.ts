import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dictionary } from '../dictionary';
import { Field } from '../field-types';

@Component({
  selector: 'moo-vlist',
  templateUrl: './moo-vlist.component.html',
  styleUrls: ['./moo-vlist.component.scss']
})
export class MooVlistComponent implements OnInit {

  setDataSource(data: Observable<any>) {
    this._dataSource$ = data;
  }

  setSchema(schema: any) {
    this._modelSchema = schema;

    // this.columns = Object.keys(this._modelSchema)
    //   .map(index => { return this._modelSchema[index]; })
    //   .filter((value) => {
    //     return value.inputType != 'hidden';
    //   });
  }

  private _dataSource$: Observable<any>;
  private _modelSchema: Dictionary<Field>;

  constructor() { }

  ngOnInit() {
  }

}
