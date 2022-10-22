import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BootstapTabComponent} from './bootstap-tab.component';

describe('BootstapTabComponent', () => {
  let component: BootstapTabComponent;
  let fixture: ComponentFixture<BootstapTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstapTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootstapTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
