import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { FoodsComponent } from './foods/foods.component';


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
                    title: 'Contacts'
                }
            },
            {
                path: 'foods',
                component: FoodsComponent,
                data: {
                    title: 'Foods'
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
