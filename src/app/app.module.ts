import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

// PRIMENG BUTTON
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';

// INTERNAL FILES
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ChildComponent } from './main/child/child.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PipesRelatedComponent } from './pipes-related/pipes-related.component';
import { HttpApiComponent } from './http-api/http-api.component';
import { HttpApiInterceptor } from './services/http-api.interceptor';
import { SignupModule } from './signup/signup.module';
import { ProductsModule } from './products/products.module';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { CoreModuleModule } from './core-module/core-module.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ChildComponent,
    PageNotFoundComponent,
    ReactiveFormComponent,
    PipesRelatedComponent,
    HttpApiComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModuleModule,
    SignupModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonModule,
    ProgressSpinnerModule,
    ToastModule,
    SharedModuleModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpApiInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
