import {Component, OnInit} from '@angular/core';

import {RecipesService} from "../../services/recipes.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
@Component({
  selector: 'app-shaker',
  templateUrl: './shaker.component.html',
  styleUrl: './shaker.component.css'
})

export class ShakerComponent implements OnInit{
  title: string | undefined;
  synopsis: string | undefined;
  posterUrl: string | undefined;

  constructor(
    private modal: NgbModal
  ) {}

  ngOnInit() {

  }


}
