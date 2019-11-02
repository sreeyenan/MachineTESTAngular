import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { VendorService } from '../vendor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-vendor',
  templateUrl: './create-vendor.component.html',
  styleUrls: ['./create-vendor.component.scss']
})
export class CreateVendorComponent implements OnInit {

  vendor: Vendor = new Vendor();
  submitted: boolean;
  angForm:FormGroup;
  Vendors:Observable<Vendor[]>;
  constructor(private fb: FormBuilder,private vendorService:VendorService,
    private router: Router,private route: ActivatedRoute,private toastr:ToastrService){ }

  ngOnInit() {
    this.createForm();

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
    this.submitted = true;
    this.vendor = new Vendor();
    this.vendor = Object.assign({}, this.vendor, this.angForm.value);
    this.vendor.vName=this.angForm.controls.vName.value;
    this.vendor.vAddress=this.angForm.controls.vAddress.value;
    this.vendor.vLocation=this.angForm.controls.vLocation.value;
    this.vendor.vService=this.angForm.controls.vService.value;
    this.vendor.vPincode=this.angForm.controls.vPincode.value;
    
    this.vendorService.duplicationcheck(this.vendor.vName).subscribe(
      data => {
        console.log(data);
        if(data != null){
          console.log("Duplicates");
          this.toastr.error('Duplicated Values', ' vendor');
          this.Vendors = this.vendorService.getVendorsList();
          this.gotoList();
        }
       
       },this.save());
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
