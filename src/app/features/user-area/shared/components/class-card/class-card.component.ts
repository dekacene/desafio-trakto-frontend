import { Component, EventEmitter, Input, Output } from '@angular/core';

import { DocumentItem } from '@interfaces/document.interface';

@Component({
  selector: 'tk-class-card',
  templateUrl: './class-card.component.html',
  styleUrls: ['./class-card.component.scss'],
})
export class ClassCardComponent {
  @Input()
  class: DocumentItem;

  @Output()
  clicked = new EventEmitter<DocumentItem>();

  onClick(): void {
    this.clicked.emit(this.class);
  }
}
