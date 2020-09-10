import { NgModule } from '@angular/core';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { ShoppingEditComponent } from '../shopping-list/shopping-edit/shopping-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LoggingService } from '../logging.service';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent
],
  imports: [SharedModule,
    ReactiveFormsModule, FormsModule,
    RouterModule.forChild([
      { path: '', component: ShoppingListComponent }])
    ],
  providers: [LoggingService]

})
export class ShoppingListModule{

}
