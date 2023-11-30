import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteCounterComponent } from './vote-counter.component';

describe('VoteCounterComponent', () => {
  let component: VoteCounterComponent;
  let fixture: ComponentFixture<VoteCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoteCounterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoteCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
