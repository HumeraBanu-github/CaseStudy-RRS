import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserRegisterationComponent } from './user-registeration/user-registeration.component';
import { AddtrainComponent} from './addtrain/addtrain.component';
import { ViewTrainComponent } from './view-train/view-train.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserDashBoardComponent } from './user-dash-board/user-dash-board.component';
import { DashGuard} from './dash.guard'
import { ReservationComponent } from './reservation/reservation.component';
import { PaymentComponent } from './payment/payment.component';
import { SearchComponent } from './search/search.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminguardGuard } from '../app/Services/adminguard.guard'
import { ManagetrainComponent } from './managetrain/managetrain.component';
import { UpdateTrainComponent } from './update-train/update-train.component';
import { ViewTrainByIdComponent } from './view-train-by-id/view-train-by-id.component';
import { ManageReservationComponent } from './manage-reservation/manage-reservation.component';
import { ViewPaymentByAdminComponent } from './view-payment-by-admin/view-payment-by-admin.component';
const routes: Routes = [
  {path:'',pathMatch:'full' , component:HomeComponent},
  {path:'AddTrain',component:AddtrainComponent,canActivate:[AdminguardGuard]},
  {path:'AddUser',component:UserRegisterationComponent},
  {path:'viewTrain',component:ViewTrainComponent},
  {path:'trainById',component:SearchComponent,canActivate:[DashGuard]},
  {path:'login',component:UserLoginComponent},
  {path:'Order/:trainNo',component:ReservationComponent,canActivate:[DashGuard]},
  {path:'payment',component:PaymentComponent,canActivate:[DashGuard]},
  {path:'thankyou',component:ThankyouComponent,canActivate:[DashGuard]},
  {path:'dashboard',component:UserDashBoardComponent,canActivate:[AdminguardGuard]},
  {path:'Adminlogin',component:AdminLoginComponent},
  {path:'manageTrain' , component:ManagetrainComponent,canActivate:[AdminguardGuard]},
  {path:'update/:trainNo',component:UpdateTrainComponent,canActivate:[AdminguardGuard]},
  {path:'ViewById/:trainNo',component:ViewTrainByIdComponent,canActivate:[AdminguardGuard]},
  {path:'manageReservation',component:ManageReservationComponent,canActivate:[AdminguardGuard]},
  {path:'viewPayment',component:ViewPaymentByAdminComponent,canActivate:[AdminguardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
