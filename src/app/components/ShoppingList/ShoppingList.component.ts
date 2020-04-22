import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../models/Ingredient.model'
@Component({
  selector: 'ShoppingList',
  templateUrl: './ShoppingList.component.html',
  styleUrls: ['./ShoppingList.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor() { }

  ngOnInit(): void {
  }

}
