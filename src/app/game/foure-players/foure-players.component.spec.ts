import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourePlayersComponent } from './foure-players.component';

describe('FourePlayersComponent', () => {
  let component: FourePlayersComponent;
  let fixture: ComponentFixture<FourePlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FourePlayersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FourePlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
