import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundReportsComponent } from './found-reports.component';

describe('FoundReportsComponent', () => {
  let component: FoundReportsComponent;
  let fixture: ComponentFixture<FoundReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoundReportsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoundReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
