import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { TopmenuComponent } from './backend/topmenu/topmenu.component';
import { SidemenuComponent } from './backend/sidemenu/sidemenu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent} from './footer/footer.component';
import { BackendfooterComponent } from './backend/backendfooter/backendfooter.component';
import { MainComponent } from './main/main.component';
import { BackendComponent } from './backend/backend.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    PortfolioComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    TopmenuComponent,
    SidemenuComponent,
    FooterComponent,
    HeaderComponent,
    BackendfooterComponent,
    MainComponent,
    BackendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
