import { Component, OnInit, ViewChild } from '@angular/core';
import { FoodService } from '../../../../services/food.service';
import { Food } from '../../../../services/food';
import { MooVformComponent } from '../../../../lib/mooadmin-ngx/moo-vform/moo-vform.component';

@Component({
    selector: 'app-foods',
    templateUrl: './foods.component.html',
    styleUrls: ['./foods.component.scss'],
    providers: [FoodService]
})
export class FoodsComponent implements OnInit {
    foods: Food[];

    @ViewChild('form') form: MooVformComponent;


    constructor(private foodService: FoodService) { }

    ngOnInit() {
        this.getFoods();
        this.form.modelSchema = this.foodService.modelSchema;
    }


    getFoods() {
        this.foodService.findAll()
            .subscribe(
                (res: any) => this.foods = res.value
            );
    }
}
