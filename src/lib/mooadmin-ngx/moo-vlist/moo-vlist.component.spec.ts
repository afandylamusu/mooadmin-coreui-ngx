import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MooVlistComponent } from './moo-vlist.component';

describe('MooVlistComponent', () => {
  let component: MooVlistComponent;
  let fixture: ComponentFixture<MooVlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MooVlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MooVlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
