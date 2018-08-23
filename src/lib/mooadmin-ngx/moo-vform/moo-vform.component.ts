import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActiveRecord, Model } from '../active-record';
import { Field } from '../field-types';
import { Dictionary } from '../dictionary';
import { NgForm } from '@angular/forms';
import { Contact } from '../../../services/contact';
import { ContactService } from '../../../services/contact.service';

@Component({
    // tslintisable-next-line:component-selector
    selector: 'moo-vform',
    templateUrl: './moo-vform.component.html',
    styleUrls: ['./moo-vform.component.scss'],
})
export class MooVformComponent implements OnInit {
    modelSchema: Dictionary<Field>;

    // tslintisable-next-line:no-input-rename
    @Input() callback: Function;
    

    @ViewChild(NgForm) ngForm: NgForm;

    constructor(private contactService:ContactService) {
    }

    ngOnInit() {
    }

    // tslintisable-next-line:use-life-cycle-interface
    ngAfterViewInit() {
        // Called after ngOnInit when the component's or directive's content has been initialized.
        // Add 'implements AfterContentInit' to the class.

    }

    public formSubmit(f: NgForm){
        this.callback(f);
    }
    postContact(contact:Contact){
        this.contactService.insert(contact).then(
          res => 
          {
  
          }
       ).catch();
       
      }

}
