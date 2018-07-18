import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindGamesComponent } from './find-games.component';

describe('FindGamesComponent', () => {
  let component: FindGamesComponent;
  let fixture: ComponentFixture<FindGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
