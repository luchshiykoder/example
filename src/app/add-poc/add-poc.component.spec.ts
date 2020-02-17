import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPOCComponent } from './add-poc.component';

describe('AddPOCComponent', () => {
  let component: AddPOCComponent;
  let fixture: ComponentFixture<AddPOCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPOCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPOCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
