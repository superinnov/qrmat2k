import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  name = 'Angular 11';

  constructor(private router: Router) {
  }
  showAccueilPage() {
    this.router.navigate(['accueil']);
  }
  showQRCodePage() {
    this.router.navigate(['qrcode']);
  }
}
