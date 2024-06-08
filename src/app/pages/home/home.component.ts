import {Component, OnInit} from '@angular/core';
import {Recipe} from "../../models/recipe";
//import {RecipesService} from "../../services/recipes.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";

import {RecipesService} from "../../services/recipes.service";

function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  //private recipesService: RecipesService | undefined
  name: string | undefined;
  instructions: string | undefined;
  photoUrl: string | undefined;
  recipes: any =[];
  selectedRecipe: Recipe | undefined;

  constructor(
    private modal: NgbModal,
    private recipesService: RecipesService
  ) {}

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes(){
    this.recipesService.getRecipe().subscribe({
      next: (recipes) => {
        this.recipes = recipes;
        this.loadRecipeData();
      },
      error: (error) => {
        console.error('Error fetching recipes', error);
      }
    });
  }



  loadRecipeData(){
    const randomNumber = getRandomNumber(0, this.recipes.length-1);
    this.selectedRecipe = this.recipes[randomNumber];
    this.name = this.selectedRecipe?.name;
    this.instructions = this.selectedRecipe?.instructions;
    this.photoUrl = this.selectedRecipe?.photoUrl;
  }
}
