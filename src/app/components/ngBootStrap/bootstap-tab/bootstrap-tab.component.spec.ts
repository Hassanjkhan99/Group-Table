import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BootstrapTabComponent} from './bootstrap-tab.component';

describe('BootstapTabComponent', () => {
  let component: BootstrapTabComponent;
  let fixture: ComponentFixture<BootstrapTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BootstrapTabComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BootstrapTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
