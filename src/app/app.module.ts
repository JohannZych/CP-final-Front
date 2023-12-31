import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CardAdviceComponent } from './card-advice/card-advice.component';
import {HttpClientModule} from "@angular/common/http";
import { AboutUsComponent } from './about-us/about-us.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from "@angular/forms";
import { FooterComponent } from './footer/footer.component';
import { AdviceComponent } from './advice/advice.component';
import { ProfileComponent } from './profile/profile.component';
import { PostFormComponent } from './post-form/post-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CardAdviceComponent,
    AboutUsComponent,
    RegisterComponent,
    FooterComponent,
    AdviceComponent,
    ProfileComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
