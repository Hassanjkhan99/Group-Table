import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AntModalComponent} from './ant-modal.component';

describe('AntModalComponent', () => {
  let component: AntModalComponent;
  let fixture: ComponentFixture<AntModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AntModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
