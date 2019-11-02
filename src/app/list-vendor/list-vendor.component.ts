import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor';
import { Observable } from 'rxjs';
import { VendorService } from '../vendor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-vendor',
  templateUrl: './list-vendor.component.html',
  styleUrls: ['./list-vendor.component.scss']
})
export class ListVendorComponent implements OnInit {

  vendors: Observable<Vendor[]>
  constructor(private vendorService: VendorService, private router: Router) { }
  ngOnInit() {

    this.reloadData();
  }

  reloadData() {
    this.vendors = this.vendorService.getVendorsList();
    console.log(this.vendors);
  }

  deleteVendor(vId: number, vendor: Vendor) {
    this.vendorService.deleteVendor(vId, vendor)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  VendorDetails(vId: number) {
    console.log(vId);
    this.router.navigate(['home/show-vendor', vId]);
  }
  updateVendor(vId: number) {
    console.log(vId);
    this.router.navigate(['home/update-vendor', vId]);
  }

  contanctDetails(vId:number){
    // console.log(vId);
    this.router.navigate(['home/create-contact',vId]);
  }
  list1() {
    this.router.navigate(['home/create-vendor']);
  }

}
