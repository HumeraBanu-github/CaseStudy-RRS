import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {AuthInterceptor} from './Services/auth.interceptor'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserRegisterationComponent } from './user-registeration/user-registeration.component';
import { SearchComponent } from './search/search.component';
import { UserService } from './user.service';
import { LoginServiceService } from './login-service.service';
import { AddtrainComponent } from './addtrain/addtrain.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewTrainComponent } from './view-train/view-train.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserDashBoardComponent } from './user-dash-board/user-dash-board.component';
import { DashGuard } from './dash.guard';
import { ReservationComponent } from './reservation/reservation.component';
import { PaymentComponent } from './payment/payment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ManagetrainComponent } from './managetrain/managetrain.component';
import { UpdateTrainComponent } from './update-train/update-train.component';
import { ViewTrainByIdComponent } from './view-train-by-id/view-train-by-id.component';
import { ManageReservationComponent } from './manage-reservation/manage-reservation.component';
import { ViewPaymentByAdminComponent } from './view-payment-by-admin/view-payment-by-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserRegisterationComponent,
    SearchComponent,
    AddtrainComponent,
    ViewTrainComponent,
    UserLoginComponent,
    
    UserDashBoardComponent,
    
    ReservationComponent,
    
    PaymentComponent,
    
    ThankyouComponent,
    
    AdminLoginComponent,
    
    ManagetrainComponent,
    
    UpdateTrainComponent,
    
    ViewTrainByIdComponent,
    
    ManageReservationComponent,
    
    ViewPaymentByAdminComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [UserService,LoginServiceService,DashGuard,[{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}]],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
