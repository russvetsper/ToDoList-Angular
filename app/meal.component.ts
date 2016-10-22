import { Component, Input } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  template: `
  <div>
    <p *ngIf="meal.calories < 500" ></p>
    <p *ngIf="meal.calories > 500" ></p>
    <label>{{ meal.name }}</label>
  </div>
  `
})
export class MealComponent {
  @Input() meal: Meal;
}
