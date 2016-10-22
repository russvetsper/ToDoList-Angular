import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <h1>New Meal</h1>
    <div>
      <label>Enter Meal Description:</label>
      <input #newDescription>
    </div>
    <div>
      <label>Enter Meal ID:</label>
      <input #newId>
      <button (click)="
        addClicked(newName.value,newDescription.value ,newCalories.value);
        newName.value='';
        newDescription.value='';
        newCalories.value='';
      ">Add</button>
    </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(name: string, description: string, calories: number) {
    var newMealToAdd: Meal = new Meal(name, description, calories);
    this.newMealSender.emit(newMealToAdd);
  }
}
