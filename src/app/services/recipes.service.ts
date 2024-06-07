import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Movie} from "../models/movie";
import { MongoClient } from 'mongodb';


@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  // private client: MongoClient;
  // private db: any;
  //
  // constructor() {

}

// import { Request, Response } from 'express';
// import Recipe from '../../server/recipe.model';
// import { connect } from '../../server/mongo';
//
// connect();
//
// export function getRecipes(req: Request, res: Response): void {
//   const docquery = Recipe.find({});
//   docquery.exec()
//     .then((recipes: any[]) => {
//       res.status(200).json(recipes);
//     })
//     .catch((error: Error) => {
//       res.status(500).send(error);
//     });
// }

