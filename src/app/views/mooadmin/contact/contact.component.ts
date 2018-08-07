import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactService } from '../../../../services/contact.service';
import { Router } from '@angular/router';
import { Contact } from '../../../../services/contact';
import { MooVformComponent } from '../../../../lib/mooadmin-ngx/moo-vform/moo-vform.component';
import { MooVtableComponent } from '../../../../lib/mooadmin-ngx/moo-vtable/moo-vtable.component';


@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    providers: [ContactService]
})
export class ContactComponent implements OnInit {

    constructor(private contactService: ContactService, private _parentRouter: Router) {
    }

    errorMessage: string;
    contacts: Contact[];

    @ViewChild('form') form: MooVformComponent;
    @ViewChild('table') table: MooVtableComponent;


    ngOnInit() {
        this.form.modelSchema = this.contactService.modelSchema;
        this.table.setSchema(this.contactService.modelSchema);
    }

    ngAfterViewInit() {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        this.getContacts();
    }

    getContacts() {
        this.contactService.findAll()
            .then(
                contacts => {
                    this.contacts = contacts;
                    this.table.load(this.contacts);
                }
            ).catch();
    }

}
