import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatBadgeModule } from '@angular/material/badge';
import { ThirdComponent } from './third/third.component';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { FourthComponent } from './fourth/fourth.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { OperationsComponent } from './operations/operations.component';
import { FundtransferComponent } from './fundtransfer/fundtransfer.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LocalStrgeComponent } from './local-strge/local-strge.component';
import { CookieService } from 'ngx-cookie-service';

const MatBadgeComponents =[
  MatBadgeModule
]
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    LoginComponent,  
    DepositComponent,
    WithdrawComponent,
    OperationsComponent,
    FundtransferComponent,
    MyNavComponent,
    LocalStrgeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatBadgeComponents,
    MatIconModule,
    MatChipsModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'first', component: FirstComponent},
      {path: 'second', component: SecondComponent},
      {path: 'third', component: ThirdComponent},
      {path: 'fourth', component: FourthComponent},
      {path: 'login', component: LoginComponent},
      {path: 'deposit', component: DepositComponent},
      {path: 'withdraw', component: WithdrawComponent}, 
      {path: 'fundtransfer', component: FundtransferComponent},
      {path: 'operations', component: OperationsComponent},
      {path: 'matNav', component: MyNavComponent},
      {path: 'localStorage', component: LocalStrgeComponent}   
      
    ]),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule
  ],
  exports : [MatBadgeComponents],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
