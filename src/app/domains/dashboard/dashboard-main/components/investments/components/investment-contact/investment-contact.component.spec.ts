import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentContactComponent } from './investment-contact.component';

describe('InvestmentContactComponent', () => {
  let component: InvestmentContactComponent;
  let fixture: ComponentFixture<InvestmentContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
