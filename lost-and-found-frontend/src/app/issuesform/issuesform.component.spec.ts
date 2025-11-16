import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesformComponent } from './issuesform.component';

describe('IssuesComponent', () => {
  let component: IssuesformComponent;
  let fixture: ComponentFixture<IssuesformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IssuesformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssuesformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
