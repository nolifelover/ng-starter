import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router' ;

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JumbotonComponent } from './jumboton/jumboton.component';
import { FeatureComponent } from './feature/feature.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const myRoutes:Routes = [
  { path:"", component:HomeComponent },
  { path:"about", component:AboutComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    NavbarComponent,
    JumbotonComponent,
    FeatureComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
