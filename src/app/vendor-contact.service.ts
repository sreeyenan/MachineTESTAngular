import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VendorContact } from './vendor-contact';

@Injectable({
  providedIn: 'root'
})
export class VendorContactService {

  baseUrl = "http://localhost:8080/RestapiMachineTest/api"
  getVendorContactList: any;

  constructor(private http: HttpClient) { }
  getVendorContactsList(): Observable<any> {
    
    return this.http.get(this.baseUrl + '/alldetails');
  }

  getVendorContact(cpId: number): Observable<any> {
    console.log(cpId);
    return this.http.get(this.baseUrl + '/vendorcontactdetailsid/' + cpId);
  }
  searchVendorContact(string:String):Observable<VendorContact[]>
  {
    return this.http.get<VendorContact[]>(this.baseUrl + '/searchDetails/' +string);
  }
}
