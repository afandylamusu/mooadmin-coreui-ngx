import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactService } from '../../../../services/contact.service';
import { Router } from '@angular/router';
import { Contact } from '../../../../services/contact';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { MooVformComponent, MooVtableComponent, MooVlistComponent } from '../../../../../lib/mooadmin-ngx';


@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    providers: [ContactService]
})
export class ContactComponent implements OnInit {

    constructor(private contactService: ContactService, private parentRouter: Router) {
    }

    errorMessage: string;
    contacts$: Observable<Contact[]>;

    @ViewChild('form') form: MooVformComponent;
    @ViewChild('table') table: MooVtableComponent;
    @ViewChild('list') list: MooVlistComponent;

    ngOnInit() {
        this.form.modelSchema = this.contactService.modelSchema;
        this.table.setSchema(this.contactService.modelSchema);
        this.list.setSchema(this.contactService.modelSchema);

    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngAfterViewInit() {
        // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        // Add 'implements AfterViewInit' to the class.
        this.getContacts();
        console.log(this.list);
    }

    cbSubmit(f: NgForm) {
        this.postContact({
            id: null, name: f.value.name, number: f.value.number, address: f.value.address,
            password: f.value.password, email: f.value.email, explanation: f.value.explanation,
            position: f.value.position, totalMonth: f.value.totalMonth, agreement: f.value.agreement
        });
    }

    deleteContacts(data: any) {
        this.contactService.delete(data.id).then(
            res => {

            });
    }

    postContact(contact: Contact) {
        this.contactService.insert(contact).then(
            res => {

            }
        ).catch();
    }


    getContacts() {
        this.contacts$ = this.contactService.findAll();
        this.table.setDataSource(this.contacts$);
        this.list.setDataSource(this.contacts$);
    }

}
