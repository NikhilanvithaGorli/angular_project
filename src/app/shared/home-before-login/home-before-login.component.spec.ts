import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBeforeLoginComponent } from './home-before-login.component';

describe('HomeBeforeLoginComponent', () => {
  let component: HomeBeforeLoginComponent;
  let fixture: ComponentFixture<HomeBeforeLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBeforeLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBeforeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
