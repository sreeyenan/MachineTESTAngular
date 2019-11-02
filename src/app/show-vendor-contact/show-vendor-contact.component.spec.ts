import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowVendorContactComponent } from './show-vendor-contact.component';

describe('ShowVendorContactComponent', () => {
  let component: ShowVendorContactComponent;
  let fixture: ComponentFixture<ShowVendorContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowVendorContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowVendorContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
