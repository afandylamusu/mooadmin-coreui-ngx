import { Component, OnInit, Input, TemplateRef, ViewChild, ContentChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Dictionary } from '../dictionary';
import { Field } from '../field-types';
import { NgForOfContext } from '@angular/common';

@Component({
  selector: 'moo-vlist',
  templateUrl: './moo-vlist.component.html',
  styleUrls: ['./moo-vlist.component.scss']
})
export class MooVlistComponent implements OnInit {
  @ContentChild(TemplateRef) listTemplate: TemplateRef<NgForOfContext<any>> ;

  setDataSource(data: Observable<any>) {
    this._dataSource$ = data;
  }

  setSchema(schema: any) {
    this._modelSchema = schema;
  }


  _dataSource$: Observable<any>;
  private _modelSchema: Dictionary<Field>;

  constructor() { }

  ngOnInit() {

  }

}
