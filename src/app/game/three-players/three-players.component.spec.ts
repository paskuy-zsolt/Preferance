import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreePlayersComponent } from './three-players.component';

describe('ThreePlayersComponent', () => {
  let component: ThreePlayersComponent;
  let fixture: ComponentFixture<ThreePlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreePlayersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThreePlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
