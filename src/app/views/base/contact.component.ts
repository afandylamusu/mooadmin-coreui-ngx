import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../services/contact.service';
import { Router } from '@angular/router';
import { Contact } from '../../../services/contact';


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

    ngOnInit() { this.getContacts();  }

    getContacts() {
        this._contactService.findAll()
        .then(
            contacts => this.contacts = contacts
        ).catch();
    }

}
