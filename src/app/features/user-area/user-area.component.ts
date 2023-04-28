import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tk-user-area',
  templateUrl: './user-area.component.html',
  styleUrls: ['./user-area.component.scss'],
})
export class UserAreaComponent {
  constructor(private _router: Router) {}

  goBackToCategory(): void {
    this._router.navigate(['category']);
  }
}
