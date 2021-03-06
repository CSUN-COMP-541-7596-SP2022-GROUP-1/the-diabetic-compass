import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastFactsComponent } from './fast-facts.component';

describe('FastFactsComponent', () => {
  let component: FastFactsComponent;
  let fixture: ComponentFixture<FastFactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FastFactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FastFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
