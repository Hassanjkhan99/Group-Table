import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AntDesignTableComponent} from './ant-design-table.component';

describe('TableComponent', () => {
  let component: AntDesignTableComponent;
  let fixture: ComponentFixture<AntDesignTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AntDesignTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntDesignTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
