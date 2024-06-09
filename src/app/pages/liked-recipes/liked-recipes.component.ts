import {Component, OnInit} from '@angular/core';

import {RecipesService} from "../../services/recipes.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";

@Component({
  selector: 'app-liked-recipes',
  templateUrl: './liked-recipes.component.html',
  styleUrl: './liked-recipes.component.css'
})
export class LikedRecipesComponent implements OnInit{
  title: string | undefined;
  synopsis: string | undefined;


  constructor(
    //private recipeService: RecipesService,
    private modal: NgbModal
  ) {}

  ngOnInit() {
    // this.recipeService.getRecipes().subscribe((res: Recipe[]) => {
    //   this.recipe = res;
    //   //console.log(this.recipe);
    //   for (let i = 0; i < this.recipe.length; i++) {
    //     this.loadRecipeData(i);
    //     console.log(this.recipes[i].posterUrl);
    //   }
    // });

  }

  // loadRecipeData(recipeNr: number){
  //   this.title = this.recipes[recipeNr].title;
  //   this.synopsis = this.recipes[recipeNr].description;
  //
  //   if (this.recipes[recipeNr].posterUrl) {
  //     this.recipeService.getImageUrl(this.recipes[recipeNr].posterUrl).subscribe(url => {
  //       this.recipes[recipeNr].posterUrl = url;
  //       //console.log(url);
  //     }, error => console.error(error));
  //   }
  // }
}
