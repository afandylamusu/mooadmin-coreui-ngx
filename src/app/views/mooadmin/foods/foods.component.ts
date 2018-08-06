import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../../../services/food.service';
import { Food } from '../../../../services/food';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss'],
  providers: [FoodService]
})
export class FoodsComponent implements OnInit {
  foods: Food[];

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.getFoods();
  }


  getFoods() {
    this.foodService.findAll()
      .then(
        (res: any) => { 
          this.foods = res.value; 
        }
      ).catch();
  }
}
