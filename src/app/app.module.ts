import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './Components/forms/forms.component';
import {HttpClientModule} from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { SearchBookComponent } from './search-book/search-book.component'
import { Route, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BookformComponent } from './bookform/bookform.component';
import { CreatebookComponent } from './createbook/createbook.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { BuybookComponent } from './buybook/buybook.component';
import { SearchbyAuthorComponent } from './searchby-author/searchby-author.component';

const routes:Route []=[

  { path:'search', component:SearchBookComponent},

  {path:'signin', component:FormsComponent},

  {path:'signup', component:SignupComponent},
  {path:'Bookform', component:BookformComponent},
  {path: 'updatebook',component:UpdatebookComponent},
  {path: 'buybook' ,component:BuybookComponent},
  {path: 'searchbyauthor' ,component:SearchbyAuthorComponent},
  {path: 'SearchBook', component:SearchBookComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    SignupComponent,
    SearchBookComponent,
    HeaderComponent,
    BookformComponent,
    CreatebookComponent,
    UpdatebookComponent,
    BuybookComponent,
    SearchbyAuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
