import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeStartComponent } from '../recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from '../recipes/recipe-edit/recipe-edit.component';

import { RecipesResolverService } from '../recipes/recipes-resolver.service';
import { AuthComponent } from '../auth/auth.component';

import { AuthGuard } from '../auth/auth.guard';
import { RecipesComponent } from '../recipes/recipes.component';

import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';
const routes: Routes = [
  {path : '', component: RecipesComponent,
  canActivate: [AuthGuard],
  children: [
    { path: '', component: RecipeStartComponent},
    {path : 'new', component: RecipeEditComponent},
    { path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService]},
    {path : ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService]},
  ]},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule{

}
