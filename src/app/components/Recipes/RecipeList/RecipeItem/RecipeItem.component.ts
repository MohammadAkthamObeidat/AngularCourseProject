import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from '../../../../models/Recipe.model'

@Component({
  selector: 'RecipeItem',
  templateUrl: './RecipeItem.component.html',
  styleUrls: ['./RecipeItem.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
