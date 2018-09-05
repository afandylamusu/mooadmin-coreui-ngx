import { Component, OnInit, ViewChild } from '@angular/core';
import { FoodService } from '../../../../services/food.service';
import { Food } from '../../../../services/food';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { MooVformComponent } from '../../../../../lib/mooadmin-ngx';

@Component({
    selector: 'app-foods',
    templateUrl: './foods.component.html',
    styleUrls: ['./foods.component.scss'],
    providers: [FoodService]
})
export class FoodsComponent implements OnInit {
    foods$: Observable<Food[]>;

    @ViewChild('form') form: MooVformComponent;


    constructor(private foodService: FoodService) { }

    ngOnInit() {
        this.getFoods();
        this.form.modelSchema = this.foodService.modelSchema;
    }


    getFoods() {
        this.foods$ = this.foodService.findAll();
    }
}
