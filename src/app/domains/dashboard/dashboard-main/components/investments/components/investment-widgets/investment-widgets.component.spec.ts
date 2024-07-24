import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentWidgetsComponent } from './investment-widgets.component';

describe('InvestmentWidgetsComponent', () => {
  let component: InvestmentWidgetsComponent;
  let fixture: ComponentFixture<InvestmentWidgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentWidgetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
