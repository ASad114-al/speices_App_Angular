import { Recipe } from './../recipe.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'The is Simply Test',
      'https://www.pngall.com/wp-content/uploads/8/Cooking-Recipe-PNG-Free-Image.png'
    ),
    new Recipe(
      'A Test Recipe',
      'The is Simply Test',
      'https://images-na.ssl-images-amazon.com/images/I/718ebRhi9AL.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'The is Simply Test',
      'https://www.pngall.com/wp-content/uploads/8/Cooking-Recipe-PNG-Free-Image.png'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
