import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tk-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text: string;

  @Output()
  clicked = new EventEmitter<void>();

  onClick(): void {
    this.clicked.emit();
  }
}
