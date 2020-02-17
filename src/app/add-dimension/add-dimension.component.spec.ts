import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDimensionComponent } from './add-dimension.component';

describe('AddDimensionComponent', () => {
  let component: AddDimensionComponent;
  let fixture: ComponentFixture<AddDimensionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDimensionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDimensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
