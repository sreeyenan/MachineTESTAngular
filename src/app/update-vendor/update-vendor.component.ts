import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Vendor } from '../vendor';
import { Observable } from 'rxjs';
import { VendorService } from '../vendor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-vendor',
  templateUrl: './update-vendor.component.html',
  styleUrls: ['./update-vendor.component.scss']
})
export class UpdateVendorComponent implements OnInit {

  vendor: Vendor = new Vendor();
  submitted: boolean;
  angForm:FormGroup;
  Vendors:Observable<Vendor[]>;
  constructor(private fb: FormBuilder,private vendorService:VendorService,
    private router: Router,private route: ActivatedRoute,private toastr:ToastrService){ }

  ngOnInit() {
    this.createForm();

    this.route.params.subscribe(params => {
      this.vendorService.getVendor(params['vId']).subscribe(res => {
        this.vendor = res;
      });
    });

  }

  createForm() {
    this.angForm = this.fb.group({
      vName: ['', Validators.required ],
      vAddress: ['', Validators.required ],
      vLocation: ['', Validators.required ],
      vService: ['', Validators.required ],
      vPincode: ['', Validators.required ],
    
    });
  }
  onSubmit() {
    
    this.save();
  }
  save() {
    this.vendorService.createVendor(this.vendor)
    
      .subscribe(data => console.log(data), error => console.log(error));
      
      this.gotoList();
  }
  gotoList() {
    this.Vendors = this.vendorService.getVendorsList();
    this.router.navigate(['home/list-vendor']);
  }
  list() {
    this.router.navigate(['home/list-vendor']);
  }
  
}
