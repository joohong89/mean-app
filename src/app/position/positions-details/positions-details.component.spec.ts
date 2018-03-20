import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionsDetailsComponent } from './positions-details.component';

describe('PositionsDetailsComponent', () => {
  let component: PositionsDetailsComponent;
  let fixture: ComponentFixture<PositionsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
