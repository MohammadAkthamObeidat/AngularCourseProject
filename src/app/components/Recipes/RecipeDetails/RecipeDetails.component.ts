import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from '../../../models/Recipe.model'
import { I18nPluralPipe } from '@angular/common';
@Component({
  selector: 'RecipeDetails',
  templateUrl: './RecipeDetails.component.html',
  styleUrls: ['./RecipeDetails.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
