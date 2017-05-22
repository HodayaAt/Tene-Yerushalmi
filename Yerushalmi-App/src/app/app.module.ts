import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { NeedSomethingComponent } from './pages/need-something/need-something.component';
import { NewspaperComponent } from './pages/newspaper/newspaper.component';
import { OrganizationListComponent } from './pages/organization-list/organization-list.component';
import { AboutComponent } from './pages/about/about.component';
import {LoginComponent} from './login/login/login.component'
import * as firebase from 'firebase/app';
import { FooterComponent } from './structure/footer/footer.component'; 
import { HeaderComponent } from './structure/header/header.component'; 

const routes: Routes = [
   { path: '', component: HomeComponent, pathMatch: 'full' },
   { path: 'Contact-List', component: ContactsComponent, pathMatch: 'full' },
   { path: 'Organization-List', component: OrganizationListComponent, pathMatch: 'full'},
   { path: 'Newspaper', component: NewspaperComponent, pathMatch: 'full'},
   { path: 'Need-Something?', component: NeedSomethingComponent, pathMatch: 'full'},
];

export const firebaseConfig = {
    apiKey: "AIzaSyBmLsENlNR1NbJAze5vSr5jPttl6O3NCoQ",
    authDomain: "yerushalmiapp-a7516.firebaseapp.com",
    databaseURL: "https://yerushalmiapp-a7516.firebaseio.com",
    projectId: "yerushalmiapp-a7516",
    storageBucket: "yerushalmiapp-a7516.appspot.com",
    messagingSenderId: "3015982921"
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    NeedSomethingComponent,
    NewspaperComponent,
    OrganizationListComponent,
    AboutComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
