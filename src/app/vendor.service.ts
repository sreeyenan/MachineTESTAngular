import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendor } from './vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  baseUrl = "http://localhost:8080/RestapiMachineTest/api"
  getVendorList: any;

  constructor(private http: HttpClient) { }
  getVendorsList(): Observable<any> {
    // console.log(this.baseUrl);
    return this.http.get(this.baseUrl + '/vendorDetails');
  }

  getVendor(pdId: number): Observable<any> {
    console.log(pdId);
    return this.http.get(this.baseUrl + '/vendordetailsid/' + pdId);
  }
  createVendor(vendor: Object): Observable<Object> {
    return this.http.post(this.baseUrl + '/vendordetailsinsert', vendor);
  }
  updateVendor(vId: number, vendor: Vendor): Observable<any> {
    // console.log(vdId,vendordet);
    return this.http.put(this.baseUrl + '/vendordetailsupdate/' + vId, vendor);
  }
  deleteVendor(vId: number, vendor: Vendor): Observable<any> {
    return this.http.put(this.baseUrl + '/vendordetailsdelete/' + vId, vendor);
  }
  duplicationcheck(vName:String): any {
    // console.log("inside duplication check: ");
    return this.http.get(this.baseUrl+'/duplication1/'+vName);
  }
}
