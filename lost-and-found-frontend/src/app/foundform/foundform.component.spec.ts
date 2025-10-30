import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundformComponent } from './foundform.component';

describe('FoundformComponent', () => {
  let component: FoundformComponent;
  let fixture: ComponentFixture<FoundformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoundformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoundformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
