import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCaptionComponent } from './card-caption.component';

describe('CardCaptionComponent', () => {
  let component: CardCaptionComponent;
  let fixture: ComponentFixture<CardCaptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCaptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCaptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
