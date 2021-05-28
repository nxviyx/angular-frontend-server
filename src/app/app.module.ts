import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router'
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';


//directives
import { AlertComponent } from './directives/alert/alert.component';

// Services
import { AlertService } from './services/alert.service';
import { RegisterService } from './services/register.service';

const appRoutes: Routes = [
  { path: '',component:RegisterComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {scrollPositionRestoration: "enabled"})
  ],
  providers: [
    RegisterService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
