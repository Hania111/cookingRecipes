import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import { Recipe } from '../models/recipe';

//const api = '/api';
const api = 'http://localhost:3000/api';


@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  constructor(private http: HttpClient) {}

  getRecipe() {
    return this.http.get<Array<Recipe>>(`${api}/recipes`);
  }

  deleteRecipe(recipe: Recipe) {
    return this.http.delete(`${api}/recipes/${recipe.id}`);
  }

  addRecipe(recipe: Recipe) {
    return this.http.post<Recipe>(`${api}/recipes/`, recipe);
  }

  updateRecipe(recipe: Recipe) {
    return this.http.put<Recipe>(`${api}/recipes/${recipe.id}`, recipe);
  }
}
