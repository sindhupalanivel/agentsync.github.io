import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";


import { AppComponent } from './app.component';
import { LoginComponent } from './client/login/login.component';
import { SignupComponent } from './client/signup/signup.component';
import { DashboardComponent } from './client/dashboard/dashboard.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { NeworderComponent } from './client/neworder/neworder.component';
import { ScheduleComponent } from './client/schedule/schedule.component';
import { MyphotosComponent } from './client/myphotos/myphotos.component';
import { MymessagesComponent } from './client/mymessages/mymessages.component';
import { MyscheduledordersComponent } from './client/myscheduledorders/myscheduledorders.component';
import { MyinvoicesComponent } from './client/myinvoices/myinvoices.component';
import { MyaccountComponent } from './client/myaccount/myaccount.component';
import { MakepaymentComponent } from './client/makepayment/makepayment.component';
import { PaymentinfoComponent } from './client/paymentinfo/paymentinfo.component';
import { GoogleaccountComponent } from './client/googleaccount/googleaccount.component';
import { MymenuComponent } from './client/mymenu/mymenu.component';
import { MyprofileComponent } from './client/myprofile/myprofile.component';
import { AdminMenuComponent } from './admin/admin-menu/admin-menu.component';
import { BroadcastmessageComponent } from './client/broadcastmessage/broadcastmessage.component';


const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "adminlogin", component: AdminLoginComponent  },
  { path: "admindashboard", component: AdminDashboardComponent  },
  { path: "neworder", component: NeworderComponent  },
  { path: "schedule", component: ScheduleComponent   },
  { path: "myphoto", component: MyphotosComponent },
  { path: "mymessages", component: MymessagesComponent },
  { path: "myscheduleorders", component:  MyscheduledordersComponent  },
  { path: "myinvoices", component: MyinvoicesComponent  },
  { path: "myaccount", component: MyaccountComponent  },
  { path: "makepayment", component: MakepaymentComponent  },
  { path: "paymentinfo", component: PaymentinfoComponent  },
  { path: "googleaccount", component: GoogleaccountComponent },
  { path: "mymenu", component: MymenuComponent },
  { path: "myprofile", component: MyprofileComponent },
  { path: "adminMenu", component: AdminMenuComponent },
  { path: "broadcastmessage", component: BroadcastmessageComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    NeworderComponent,
    ScheduleComponent,
    MyphotosComponent,
    MymessagesComponent,
    MyscheduledordersComponent,
    MyinvoicesComponent,
    MyaccountComponent,
    MakepaymentComponent,
    PaymentinfoComponent,
    GoogleaccountComponent,
    MymenuComponent,
    MyprofileComponent,
    AdminMenuComponent,
    BroadcastmessageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
