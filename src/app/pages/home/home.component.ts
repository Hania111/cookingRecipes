import {Component, OnInit} from '@angular/core';
import {Movie} from "../../models/movie";
import {RecipesService} from "../../services/recipes.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";

function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  movies:Movie[] = [];
  title: string | undefined;
  synopsis: string | undefined;
  posterUrl: string | undefined;

  constructor(
    private recipesService: RecipesService,
    //private modal: NgbModal
  ) {}

  ngOnInit() {
    // try {
    //   const recipes = await this.recipesService.getRecipes();
    //   console.log(recipes); // Logowanie przepisów do konsoli
    // } catch (error) {
    //   console.error('Error fetching recipes', error);
    // }
    // this.movieService.getMovies().subscribe((res: Movie[]) => {
    //   this.movies = res;
    //  // this.loadMovieData();
    // });
  }

  // loadMovieData(){
  //   const randomNumber = getRandomNumber(0, this.movies.length-1);
  //   this.title = this.movies[randomNumber].title;
  //   this.synopsis = this.movies[randomNumber].description;
  //
  //   if (this.movies[randomNumber].posterUrl) {
  //     this.movieService.getImageUrl(this.movies[randomNumber].posterUrl).subscribe(url => {
  //       this.posterUrl = url;
  //       console.log(url);
  //     }, error => console.error(error));
  //   }
  // }
}
