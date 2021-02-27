import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAddressPagingTaskComponent } from './company-address-paging-task.component';

describe('CompanyAddressPagingTaskComponent', () => {
  let component: CompanyAddressPagingTaskComponent;
  let fixture: ComponentFixture<CompanyAddressPagingTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyAddressPagingTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyAddressPagingTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
