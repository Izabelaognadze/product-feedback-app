import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackBoardComponent } from './feedback-board.component';

describe('FeedbackBoardComponent', () => {
  let component: FeedbackBoardComponent;
  let fixture: ComponentFixture<FeedbackBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackBoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedbackBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
