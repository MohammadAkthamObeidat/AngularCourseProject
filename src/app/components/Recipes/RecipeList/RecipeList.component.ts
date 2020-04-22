import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../models/Recipe.model';

@Component({
  selector: 'RecipeList',
  templateUrl: './RecipeList.component.html',
  styleUrls: ['./RecipeList.component.css']
})
export class RecipeListComponent implements OnInit {

  public recipes: Recipe[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
