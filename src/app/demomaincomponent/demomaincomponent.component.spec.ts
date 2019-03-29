import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemomaincomponentComponent } from './demomaincomponent.component';

describe('DemomaincomponentComponent', () => {
  let component: DemomaincomponentComponent;
  let fixture: ComponentFixture<DemomaincomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemomaincomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemomaincomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
