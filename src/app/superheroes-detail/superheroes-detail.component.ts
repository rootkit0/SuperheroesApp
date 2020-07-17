import { Component, OnInit } from '@angular/core';
import { Superhero } from '../models/superhero';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-superheroes-detail',
  templateUrl: './superheroes-detail.component.html',
  styleUrls: ['./superheroes-detail.component.css']
})
export class SuperheroesDetailComponent implements OnInit {

  private id: number;
  private subroute: Subscription;
  private superhero: Superhero;
  private chart: {name: string, value: number}[];

  //Chart options
  view: any[] = [700, 400];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = false;
  showYAxisLabel = false;
  colorScheme = {
    domain: ['#0000ff', '#ff0000', '#ffff00', '#008000', '#ffa500', '#b83434']
  };

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    //Get id
    this.subroute = this.route.params.subscribe(
      data => {
        this.id = data["id"];
      }
    );
    //Get superhero with the ID
    this.apiService.getSuperhero(this.id).subscribe(
      data => {
        this.superhero = data;
        this.chart = [
          {
            "name": "Intelligence",
            "value": this.superhero.powerstats.intelligence
          },
          {
            "name": "Strength",
            "value": this.superhero.powerstats.strength
          },
          {
            "name": "Speed",
            "value": this.superhero.powerstats.speed
          },
          {
            "name": "Durability",
            "value": this.superhero.powerstats.durability
          },
          {
            "name": "Power",
            "value": this.superhero.powerstats.power
          },
          {
            "name": "Combat",
            "value": this.superhero.powerstats.combat
          }
        ];
      }
    );
  }

  ngOnDestroy() {
    this.subroute.unsubscribe();
  }
}
