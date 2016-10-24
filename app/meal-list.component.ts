import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';


@Component({
  selector: 'meal-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="all">Show All</option>
      <option value="isUnder500">Show under 500</option>
      <option value="isOver500" selected="selected">Show over 500</option>
    </select>
    <div class="list" *ngFor="let currentMeal of childMealList | completeness:selectedCompleteness">
    <h3>  <meal-display [meal]="currentMeal"></meal-display></h3>
    <ul>
      <h3>Description: {{currentMeal.description}}</h3>
      <h3>Calories: {{currentMeal.calories}}</h3>
    </ul>
    <form *ngIf="currentMeal === selectedMeal">
      <input [(ngModel)]="currentMeal.name">
      <input [(ngModel)]="currentMeal.description">
      <input [(ngModel)]="currentMeal.calories" type="number"  aria-label="amount">
    </form>
      <button (click)="editButtonHasBeenClicked(currentMeal)">Edit</button>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  public selectedCompleteness: string = "notDone";
  onChange(optionFromMenu) {
    this.selectedCompleteness = optionFromMenu;
    console.log(this.selectedCompleteness);
  }
  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
}
