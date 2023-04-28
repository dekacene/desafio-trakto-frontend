import { Component } from '@angular/core';

@Component({
  selector: 'tk-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  currentDate: string = new Date().toLocaleDateString();
  iconsPath: string = 'assets/icons/nav-bar';
}
