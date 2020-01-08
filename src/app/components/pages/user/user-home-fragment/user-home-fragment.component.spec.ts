import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomeFragmentComponent } from './user-home-fragment.component';

describe('UserHomeFragmentComponent', () => {
  let component: UserHomeFragmentComponent;
  let fixture: ComponentFixture<UserHomeFragmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserHomeFragmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHomeFragmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
