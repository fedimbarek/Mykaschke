import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import{MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import{MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input';
import{MatSelectModule} from '@angular/material/select';
import{MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from  '@angular/material/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AccuilComponent } from './accuil/accuil.component';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './footer/footer.component';
import { MagasinComponent } from './magasin/magasin.component';
import { Dialog1Component } from './dialog1/dialog1.component';
import { Table2Component } from './table2/table2.component';
import { AproposComponent } from './apropos/apropos.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ElectronicComponent } from './electronic/electronic.component';
import { Dialog2Component } from './dialog2/dialog2.component';
import { Table3Component } from './table3/table3.component';
@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    TableComponent,
    LoginComponent,
    NavbarComponent,
    ToolbarComponent,
    AccuilComponent,
    ErrorComponent,
    FooterComponent,
    MagasinComponent,
    Dialog1Component,
    Table2Component,
    AproposComponent,
    SignupComponent,
    SigninComponent,
    ElectronicComponent,
    Dialog2Component,
    Table3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
