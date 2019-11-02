import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { ListVendorComponent } from './list-vendor/list-vendor.component';
import { CreateVendorComponent } from './create-vendor/create-vendor.component';
import { CreateContactComponent } from './create-contact/create-contact.component';

import { ListVendorContactComponent } from './list-vendor-contact/list-vendor-contact.component';
import { UpdateVendorComponent } from './update-vendor/update-vendor.component';
import { ListContactComponent } from './list-contact/list-contact.component';
import { ShowVendorComponent } from './show-vendor/show-vendor.component';
import { ShowContactComponent } from './show-contact/show-contact.component';
import { ShowVendorContactComponent } from './show-vendor-contact/show-vendor-contact.component';
import { HomeuserComponent } from './homeuser/homeuser.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';


const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'login'},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent, canActivate: [AuthGuard],
                                          children: [
                                            {path:'list-vendor',component:ListVendorComponent},
                                            {path:'create-vendor',component:CreateVendorComponent},
                                            {path:'update-vendor/:vId',component:UpdateVendorComponent},
                                            {path:'create-contact/:vId',component:CreateContactComponent},
                                            {path:'list-vendor-contact',component:ListVendorContactComponent},
                                            {path:'update-contact/:cpId',component:UpdateContactComponent},
                                            {path:'list-contact',component:ListContactComponent},
                                            
                                            {path:'show-vendor/:vId',component:ShowVendorComponent},
                                            {path:'show-contact/:vId',component:ShowContactComponent},
                                            {path:'show-vendor-contact/:vId',component:ShowVendorContactComponent},
                                          ]
                                        
                                        },
{path:'homeuser',component:HomeuserComponent, canActivate: [AuthGuard], 
          children: [
            {path:'list-vendor-contact',component:ListVendorContactComponent},
                        ]
                      }
                      ];

  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
