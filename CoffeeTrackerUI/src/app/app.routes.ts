import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InsertCoffeeComponent } from './insert-coffee/insert-coffee.component';
import { UpdateCoffeeComponent } from './update-coffee/update-coffee.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'insert',
    component: InsertCoffeeComponent
  },
  {
    path: 'update/:id',
    component: UpdateCoffeeComponent
  }
];
