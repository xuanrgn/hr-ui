import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewAddDialogComponent } from './interview-add-dialog.component';

describe('InterviewAddDialogComponent', () => {
  let component: InterviewAddDialogComponent;
  let fixture: ComponentFixture<InterviewAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewAddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
