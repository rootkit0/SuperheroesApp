import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Superhero } from '../models/superhero';

@Component({
  selector: 'app-superheroes',
  templateUrl: './superheroes.component.html',
  styleUrls: ['./superheroes.component.css']
})
export class SuperheroesComponent implements OnInit {

  private superheroes: Superhero[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    //Get superheroes
    this.apiService.getSuperheroes().subscribe(
      data => {
        this.superheroes = data;
      }
    )
  }
}
