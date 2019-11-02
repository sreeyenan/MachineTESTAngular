import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  baseUrl = "http://localhost:8080/RestapiMachineTest/api"
  getContactList: any;

  constructor(private http: HttpClient) { }
  getContactsList(): Observable<any> {
    // console.log(this.baseUrl);
    return this.http.get(this.baseUrl + '/contactdetails');
  }

  getContact(cpId: number): Observable<any> {
    console.log(cpId);
    return this.http.get(this.baseUrl + '/contactdetailsid/' + cpId);
  }
  createContact(contact: Object): Observable<Object> {
    return this.http.post(this.baseUrl + '/contactdetailsinsert', contact);
  }
  updateContact(cpId: number, contact: Contact): Observable<any> {
    // console.log(vdId,vendordet);
    return this.http.put(this.baseUrl + '/contactdetailsupdate/' + cpId, contact);
  }
  deleteContact(cpId: number, contact: Contact): Observable<any> {
    return this.http.put(this.baseUrl + '/contactdetailsdelete/' + cpId, contact);
  }
  duplicationcheck(cpEmail:String): any {
    // console.log("inside duplication check: ");
    return this.http.get(this.baseUrl+'/duplication1/'+cpEmail);
  }
}

