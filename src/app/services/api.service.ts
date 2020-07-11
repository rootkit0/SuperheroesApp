import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Superhero } from '../models/superhero';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api';

  constructor(private http: HttpClient) { }

  getSuperheroes() {
    return this.http.get<Superhero[]>(this.apiUrl + "/all.json");
  }

  getSuperhero(id: number) {
    return this.http.get<Superhero>(this.apiUrl + "/id/" + id + ".json");
  }
}
