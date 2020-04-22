import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './components/ShoppingList/ShoppingList.component';
import { NavbarComponent } from './components/Navbar/Navbar.component';
import { RecipesComponent } from './components/Recipes/Recipes.component';
import { RecipeListComponent } from './components/Recipes/RecipeList/RecipeList.component';
import { RecipeDetailsComponent } from './components/Recipes/RecipeDetails/RecipeDetails.component';
import { RecipeItemComponent } from './components/Recipes/RecipeList/RecipeItem/RecipeItem.component';
import { ShoppingEditComponent } from './components/ShoppingList/ShoppingEdit/ShoppingEdit.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    NavbarComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    ShoppingEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
