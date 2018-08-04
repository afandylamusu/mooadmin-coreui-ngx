import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';


const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Contacts'
        },
        children: [
            {
                path: 'contact',
                component: ContactComponent,
                data: {
                    title: 'Cards'
                }
            }
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MooDemoRoutingModule { }
