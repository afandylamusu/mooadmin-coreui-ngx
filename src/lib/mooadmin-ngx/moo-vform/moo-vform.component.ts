import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActiveRecord, Model } from '../active-record';
import { Field } from '../field-types';
import { Dictionary } from '../dictionary';
import { NgForm } from '@angular/forms';
import { Contact } from '../../../services/contact';
import { ContactService } from '../../../services/contact.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'moo-vform',
    templateUrl: './moo-vform.component.html',
    styleUrls: ['./moo-vform.component.scss'],
})
export class MooVformComponent implements OnInit {
    modelSchema: Dictionary<Field>;

    // tslint:disable-next-line:no-input-rename
    @Input('onSubmit') onSubmit: any;

    @ViewChild(NgForm) ngForm: NgForm;

    constructor(private contactService:ContactService) {
    }

    ngOnInit() {
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngAfterViewInit() {
        // Called after ngOnInit when the component's or directive's content has been initialized.
        // Add 'implements AfterContentInit' to the class.

    }

    public formSubmit(f: NgForm){
        this.postContact({ id: null, name: f.value.name, phone: f.value.number });
      window.location.reload();
    }

    postContact(contact: Contact){
        this.contactService.insert(contact).then(
          res => 
          {
  
          }
       ).catch();
       window.location.reload();
      }

}
