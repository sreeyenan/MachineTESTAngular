import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-show-vendor',
  templateUrl: './show-vendor.component.html',
  styleUrls: ['./show-vendor.component.scss']
})
export class ShowVendorComponent implements OnInit {

  vId: number;
  vendor: Vendor;
  constructor(private route: ActivatedRoute, private router: Router,
    private vendorService: VendorService) { }

    ngOnInit() {
      this.vendor = new Vendor();
      this.vId = this.route.snapshot.params['vId'];
      console.log(this.vId);
      console.log(this.vendor);
      this.vendorService.getVendor(this.vId)
        .subscribe(data => {
          console.log(data)
          this.vendor = data;
        }, error => console.log(error));
    }
    list() {
      this.router.navigate(['home/list-vendor']);
    }

}
