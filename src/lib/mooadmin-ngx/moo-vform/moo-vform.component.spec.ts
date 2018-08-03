import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MooVformComponent } from './moo-vform.component';

describe('MooVformComponent', () => {
  let component: MooVformComponent;
  let fixture: ComponentFixture<MooVformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MooVformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MooVformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
