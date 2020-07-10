import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroesDetailComponent } from './superheroes-detail.component';

describe('SuperheroesDetailComponent', () => {
  let component: SuperheroesDetailComponent;
  let fixture: ComponentFixture<SuperheroesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperheroesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperheroesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
