import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAdviceComponent } from './card-advice.component';

describe('CardAdviceComponent', () => {
  let component: CardAdviceComponent;
  let fixture: ComponentFixture<CardAdviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAdviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
