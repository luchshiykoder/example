import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsidemenuComponent } from './asidemenu.component';

describe('AsidemenuComponent', () => {
  let component: AsidemenuComponent;
  let fixture: ComponentFixture<AsidemenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsidemenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsidemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
