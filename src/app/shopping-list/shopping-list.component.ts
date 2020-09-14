import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { Subscription, Observable } from 'rxjs';
import { LoggingService } from '../logging.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as ShoppingListActions from './store/shopping-list.actions';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  constructor(

    private loggingService: LoggingService,
    private store: Store<fromApp.AppState>) {}

  ingredients: Observable<{ ingredients: Ingredient[]}>;
  subscription: Subscription;

  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingList');
    // this.ingredients = this.shoppingListService.getIngredients();
    // this.loggingService.printLog('Hello from shopping list component ngoninit');
    // this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
    //   (ingredients: Ingredient[]) => {
    //     this.ingredients = ingredients;
    //   }
    // );
  }

  onEditItem(index: number) {
    //this.shoppingListService.startedEditing.next(i);
    this.store.dispatch(new ShoppingListActions.StartEdit(index));

  }

  ngOnDestroy() {
  }
}
