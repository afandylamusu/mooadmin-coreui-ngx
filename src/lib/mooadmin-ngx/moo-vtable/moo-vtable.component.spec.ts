import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MooVtableComponent } from './moo-vtable.component';

describe('MooVtableComponent', () => {
  let component: MooVtableComponent;
  let fixture: ComponentFixture<MooVtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MooVtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MooVtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
