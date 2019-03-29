import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponetComponent } from './main-componet.component';

describe('MainComponetComponent', () => {
  let component: MainComponetComponent;
  let fixture: ComponentFixture<MainComponetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainComponetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
