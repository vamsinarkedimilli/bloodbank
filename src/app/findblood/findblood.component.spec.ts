import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindbloodComponent } from './findblood.component';

describe('FindbloodComponent', () => {
  let component: FindbloodComponent;
  let fixture: ComponentFixture<FindbloodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindbloodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindbloodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
