import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostformComponent } from './lostform.component';

describe('LostformComponent', () => {
  let component: LostformComponent;
  let fixture: ComponentFixture<LostformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LostformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LostformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
