import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSettingsFragmentComponent } from './user-settings-fragment.component';

describe('UserSettingsFragmentComponent', () => {
  let component: UserSettingsFragmentComponent;
  let fixture: ComponentFixture<UserSettingsFragmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSettingsFragmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSettingsFragmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
