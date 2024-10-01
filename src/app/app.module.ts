import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PipeComponent } from './pipe/pipe.component';
import { TwoWayDbComponent } from './two-way-db/two-way-db.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { StructuralltaskComponent } from './structuralltask/structuralltask.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DataBindingComponent,
    PipeComponent,
    TwoWayDbComponent,
    DirectiveExampleComponent,
    StructuralDirectiveComponent,
    SwitchCaseComponent,
    StructuralltaskComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
