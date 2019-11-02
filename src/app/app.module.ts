import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ToastrModule,ToastrService} from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ NgxPaginationModule } from'ngx-pagination';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ListVendorComponent } from './list-vendor/list-vendor.component';
import { CreateVendorComponent } from './create-vendor/create-vendor.component';
import { ShowVendorComponent } from './show-vendor/show-vendor.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
 import { OrderModule } from 'ngx-order-pipe';

import { ListVendorContactComponent } from './list-vendor-contact/list-vendor-contact.component';
import { UpdateVendorComponent } from './update-vendor/update-vendor.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { ListContactComponent } from './list-contact/list-contact.component';
import { ShowVendorContactComponent } from './show-vendor-contact/show-vendor-contact.component';
import { ShowContactComponent } from './show-contact/show-contact.component';
import { HomeuserComponent } from './homeuser/homeuser.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
    HomeComponent,
    
    ListVendorComponent,
    
    CreateVendorComponent,
    
    ShowVendorComponent,
    
    CreateContactComponent,
 
    ListVendorContactComponent,
 
    UpdateVendorComponent,
 
    UpdateContactComponent,
 
    ListContactComponent,
 
    ShowVendorContactComponent,
 
    ShowContactComponent,
 
    HomeuserComponent,

    

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl:'never'}),
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    OrderModule,
    NgxPaginationModule,
  ],
  providers: [ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
