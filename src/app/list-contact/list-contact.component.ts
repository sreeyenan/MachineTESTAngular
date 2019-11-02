import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.scss']
})
export class ListContactComponent implements OnInit {
  contacts: Observable<Contact[]>
  constructor(private contactService: ContactService, private router: Router) { }
  ngOnInit() {

    this.reloadData();
  }
  reloadData() {
    this.contacts = this.contactService.getContactsList();
    console.log(this.contacts);
  }
  deleteContact(cpId: number, contact: Contact) {
    this.contactService.deleteContact(cpId, contact)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  ContactDetails(cpId: number) {
    console.log(cpId);
    this.router.navigate(['home/show-contact', cpId]);
  }
  updateContact(cpId: number) {
    console.log(cpId);
    this.router.navigate(['home/update-contact', cpId]);
  }
  list1() {
    this.router.navigate(['home/create-contact']);
  }

}
