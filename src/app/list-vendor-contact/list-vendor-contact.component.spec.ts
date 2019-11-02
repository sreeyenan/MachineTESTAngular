import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVendorContactComponent } from './list-vendor-contact.component';

describe('ListVendorContactComponent', () => {
  let component: ListVendorContactComponent;
  let fixture: ComponentFixture<ListVendorContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVendorContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVendorContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
