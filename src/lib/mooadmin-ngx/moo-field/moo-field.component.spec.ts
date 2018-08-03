import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MooFieldComponent } from './moo-field.component';

describe('MooFieldComponent', () => {
  let component: MooFieldComponent;
  let fixture: ComponentFixture<MooFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MooFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MooFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
