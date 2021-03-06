import { Ingredient } from './../shared/ingredient.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient(' Apples', 5),
    new Ingredient(' Tomatoes', 15),
    new Ingredient(' Milk', 2),
  ];
  constructor() {}

  ngOnInit(): void {}
}
