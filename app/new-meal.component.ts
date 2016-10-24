import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <h1>New Meal</h1>
    <div>
      <label>Enter Meal Description:</label>
    
    </div>
    <div>
      <form class="add-new-meal">
  <label for="">name</label>
  <input class="form-control" type="text" name="name" value="" #newName>
  <label for="">description</label>
  <input class="form-control" type="text" name="name" value="" #newDescription>
  <label for="">calories</label>
  <input  class="form-control" type="text" name="name" value="" #newCalories>
  <button (click)="
    addClicked(newName.value,newDescription.value ,newCalories.value);
    newName.value='';
    newDescription.value='';
    newCalories.value='';
  ">Add</button>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(name: string, description: string, calories: number) {
    var newMealToAdd: Meal = new Meal(name, description, calories);
    this.newMealSender.emit(newMealToAdd);
  }
}
