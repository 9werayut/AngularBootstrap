import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ServiceComponent } from "./service/service.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ContactComponent } from "./contact/contact.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./backend/dashboard/dashboard.component";
import { MainComponent } from "./main/main.component";
import { BackendComponent } from "./backend/backend.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      { path: "", component: HomeComponent },
      { path: "about", component: AboutComponent },
      { path: "service", component: ServiceComponent },
      { path: "portfolio", component: PortfolioComponent },
      { path: "contact", component: ContactComponent },
      { path: "register", component: RegisterComponent },
      { path: "login", component: LoginComponent }
    ]
  },
  {
    path: "backend",
    component: BackendComponent,
    children: [
      { path: "dashboard", component: DashboardComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
