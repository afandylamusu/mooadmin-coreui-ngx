import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactService } from '../../../services/contact.service';
import { Router } from '@angular/router';
import { Contact } from '../../../services/contact';
import { MooVformComponent } from '../../../lib/mooadmin-ngx/moo-vform/moo-vform.component';


@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    providers: [ContactService]
})
export class ContactComponent implements OnInit {

    constructor(private _contactService: ContactService, private _parentRouter: Router) {
    }

    errorMessage: string;
    contacts: Contact[];

    @ViewChild('form') form: MooVformComponent;


    ngOnInit() { this.form.service = this._contactService; }

    getContacts() {
        this._contactService.findAll()
            .then(
                contacts => this.contacts = contacts
            ).catch();
    }

}
