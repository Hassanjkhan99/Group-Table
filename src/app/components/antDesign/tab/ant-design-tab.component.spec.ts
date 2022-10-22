import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AntDesignTabComponent} from './ant-design-tab.component';

describe('TabComponent', () => {
  let component: AntDesignTabComponent;
  let fixture: ComponentFixture<AntDesignTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AntDesignTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntDesignTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
