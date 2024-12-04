import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// PRIMENG BUTTON
import { ButtonModule } from 'primeng/button';

// INTERNAL FILES
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ChildComponent } from './main/child/child.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PipesRelatedComponent } from './pipes-related/pipes-related.component';
import { HttpApiComponent } from './http-api/http-api.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ChildComponent,
    PageNotFoundComponent,
    SignupComponent,
    ReactiveFormComponent,
    PipesRelatedComponent,
    HttpApiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
