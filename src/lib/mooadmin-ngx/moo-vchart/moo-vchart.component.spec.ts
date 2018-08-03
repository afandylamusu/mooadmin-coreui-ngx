import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MooVchartComponent } from './moo-vchart.component';

describe('MooVchartComponent', () => {
  let component: MooVchartComponent;
  let fixture: ComponentFixture<MooVchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MooVchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MooVchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
