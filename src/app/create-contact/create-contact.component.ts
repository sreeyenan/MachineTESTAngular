import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from '../contact.service';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.scss']
})
export class CreateContactComponent implements OnInit {
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
  }
  createForm() {
    this.angForm = this.fb.group({
      cpName: ['', Validators.required ],
      // cpVId: ['', Validators.required ],
      cpDepartment: ['', Validators.required ],
      cpEmail: ['', Validators.required ],
      cpPhone: ['', Validators.required ],
    
    });

  }

  onSubmit() {
    this.submitted = true;
    this.contact = new Contact();
    this.contact = Object.assign({}, this.contact, this.angForm.value);
    this.contact.cpName=this.angForm.controls.cpName.value;
    this.contact.cpVId=this.vendor.vId;
    this.contact.cpDepartment=this.angForm.controls.cpDepartment.value;
    this.contact.cpEmail=this.angForm.controls.cpEmail.value;
    this.contact.cpPhone=this.angForm.controls.cpPhone.value;
    
    this.contactService.duplicationcheck(this.contact.cpEmail).subscribe(
      data => {
        console.log(data);
        if(data != null){
          console.log("Duplicates");
          this.toastr.error('Duplicated Values', 'Contacts');
          this.Vendors = this.contactService.getContactsList();
          this.gotoList();
        }
       
       },this.save());
  }

  save() {
    this.contactService.createContact(this.contact)
    
      .subscribe(data => console.log(data), error => console.log(error));
      
      this.gotoList();
  }

  gotoList() {
    this.Vendors = this.contactService.getContactsList();
    this.router.navigate(['home/list-contact']);
  }
  list() {
    this.router.navigate(['home/list-contact']);
  }


}
