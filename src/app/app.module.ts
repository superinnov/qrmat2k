import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import {
  MatDividerModule,
  MatListModule,
} from '@angular/material';
import { Routes, RouterModule, Router } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AcanQrComponent } from './components/acan-qr/acan-qr.component';
import { QrScannerComponent } from 'angular2-qrscanner';

const appRoutes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'qrcode', component: AcanQrComponent }
];

@NgModule({
  imports:      [ 
    BrowserModule, 
    BrowserAnimationsModule, 
    FormsModule, 
    MatDividerModule,
    MatListModule,
    MaterialModule, RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true
      })],
  declarations: [ AppComponent, AccueilComponent, AcanQrComponent, QrScannerComponent],
  bootstrap:    [ AppComponent ],
})
export class AppModule { 
}
