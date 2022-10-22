import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HOCComponent} from './hoc.component';

describe('HOCComponent', () => {
  let component: HOCComponent;
  let fixture: ComponentFixture<HOCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HOCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HOCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
