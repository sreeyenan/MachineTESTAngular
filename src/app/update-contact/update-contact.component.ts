import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Contact } from '../contact';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../vendor';
import { Observable } from 'rxjs';
import { ContactService } from '../contact.service';
import { ToastrService } from 'ngx-toastr';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.scss']
})
export class UpdateContactComponent implements OnInit {

  vId:number;
  vendor: Vendor = new Vendor();
  contact: Contact = new Contact();
  submitted: boolean;
  angForm:FormGroup;
  Vendors:Observable<Contact[]>;
  Contacts:Observable<Contact[]>;

  constructor(private fb: FormBuilder,private contactService:ContactService,
    private router: Router,private route: ActivatedRoute,private toastr:ToastrService, private vendorService:VendorService,){ }


  ngOnInit() {
    
    this.createForm();
  
    this.route.params.subscribe(params => {
      this.vendorService.getVendor(params['vId']).subscribe(res => {
        this.vendor = res;
      });
    });
    this.route.params.subscribe(params => {
      this.contactService.getContact(params['cpId']).subscribe(res => {
        this.contact = res;
      });
    });
  }
  createForm() {
    this.angForm = this.fb.group({
      cpName: ['', Validators.required ],
      
      cpDepartment: ['', Validators.required ],
      cpEmail: ['', Validators.required ],
      cpPhone: ['', Validators.required ],
    
    });

  }

  onSubmit() {
    
       this.save();
  }

  save() {
    this.contactService.createContact(this.contact)
    
      .subscribe(data => console.log(data), error => console.log(error));
      
      this.gotoList();
  }

  gotoList() {
    this.Vendors = this.contactService.getContactsList();
    this.router.navigate(['home/list-vendor-contact']);
  }
  list() {
    this.router.navigate(['home/list-vendor']);
  }


}
