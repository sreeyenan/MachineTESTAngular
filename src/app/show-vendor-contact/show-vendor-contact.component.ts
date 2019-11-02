import { Component, OnInit } from '@angular/core';
import { VendorContact } from '../vendor-contact';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorContactService } from '../vendor-contact.service';

@Component({
  selector: 'app-show-vendor-contact',
  templateUrl: './show-vendor-contact.component.html',
  styleUrls: ['./show-vendor-contact.component.scss']
})
export class ShowVendorContactComponent implements OnInit {

  cpId: number;
  vendorContact: VendorContact;
  constructor(private route: ActivatedRoute, private router: Router,
    private vendorContactService: VendorContactService) { }

    ngOnInit() {
      this.vendorContact = new VendorContact();
      this.cpId = this.route.snapshot.params['cpId'];
      console.log(this.cpId);
      console.log(this.vendorContact);
      this.vendorContactService.getVendorContact(this.cpId)
        .subscribe(data => {
          console.log(data)
          this.vendorContact = data;
        }, error => console.log(error));
    }
    list() {
      this.router.navigate(['home/list-vendor-contact']);
    }
  }
