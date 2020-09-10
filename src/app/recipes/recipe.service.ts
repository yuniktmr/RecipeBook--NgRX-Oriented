import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service'
import { Subject } from 'rxjs';
@Injectable()
export class RecipeService{

  recipesChanged = new Subject<Recipe[]>();
  // private recipes : Recipe[] = [
  //   new Recipe('Test','A test',
  //   `https://p0.pikist.com/photos/943/665/kyllingefrikadeller-potatoes-meatballs-recipes-food-pictures-recipe-kyllingefrikadelle.jpg`
  //   ,[
  //     new Ingredient('Meat', 1),
  //     new Ingredient('Fries', 20)
  //   ]),
  //   new Recipe('Test2','Another test',
  //   `https://p0.pikist.com/photos/943/665/kyllingefrikadeller-potatoes-meatballs-recipes-food-pictures-recipe-kyllingefrikadelle.jpg`
  //   ,[
  //     new Ingredient('Bun', 2),
  //     new Ingredient('Meat', 2)
  //   ])
  // ];

  private recipes: Recipe[] = [];
  constructor(private shoppingListService: ShoppingListService){}

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients:Ingredient[]){
    this.shoppingListService.addIngredientsToList(ingredients);
  }

  getRecipe(index :number){
    return this.recipes[index];
  }

  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index:number, newRecipe:Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index:number){
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
  }

  setRecipes(recipes:Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
}
