import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VendorContact } from '../vendor-contact';
import { VendorContactService } from '../vendor-contact.service';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';
import { VendorService } from '../vendor.service';
import { Contact } from '../contact';
import { Vendor } from '../vendor';

@Component({
  selector: 'app-list-vendor-contact',
  templateUrl: './list-vendor-contact.component.html',
  styleUrls: ['./list-vendor-contact.component.scss']
})
export class ListVendorContactComponent implements OnInit {
  vendorContact:VendorContact[];
  vendorContacts: Observable<VendorContact[]>
  constructor(private vendorContactService: VendorContactService, private router: Router,private contactService: ContactService,private vendorService: VendorService,) { }
  ngOnInit() {

    this.reloadData();
  }
  reloadData() {
    this.vendorContacts = this.vendorContactService.getVendorContactsList();
    console.log(this.vendorContacts);
  }
  VendorContactDetails(cpId: number) {
    console.log(cpId);
    this.router.navigate(['home/show-vendor-contact', cpId]);
  }
  list1() {
    this.router.navigate(['home/create-vendor']);
  }
  updateVendor(vId: number) {
    console.log(vId);
    this.router.navigate(['home/update-vendor', vId]);
  }
  deleteContact(cpId: number, vendor: Vendor) {
    this.vendorService.deleteVendor(cpId, vendor)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  //Searching
  string:String;
  searchVendorContact(string){
    if(string!=null){
    this.vendorContacts=this.vendorContactService.searchVendorContact(this.string);
     }else{
      this.reloadData();
     }
      
  }
}
  

