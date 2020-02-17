import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapPOCSurveyComponent } from './map-pocsurvey.component';

describe('MapPOCSurveyComponent', () => {
  let component: MapPOCSurveyComponent;
  let fixture: ComponentFixture<MapPOCSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapPOCSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapPOCSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
