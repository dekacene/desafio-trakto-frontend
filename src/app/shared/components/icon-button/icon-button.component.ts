import { Component, Input, OnInit } from '@angular/core';

import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'tk-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent extends ButtonComponent implements OnInit {
  @Input() color: string;
  @Input() text: string;
  @Input() img: string;
  @Input() imgHover: string;

  fullImgPath = '';
  fullImgHoverPath = '';

  #white = 'var(--tk-white-neutral)';
  #colorVar = '';
  #iconsBasePath = 'assets/icons/buttons/';

  ngOnInit(): void {
    this.fullImgPath = this.#iconsBasePath + this.img;
    this.fullImgHoverPath = this.#iconsBasePath + this.imgHover;
    this.#colorVar = this.color.startsWith('--')
      ? `var(${this.color})`
      : this.color;
  }

  getStyle(): any {
    return {
      backgroundColor: this.#white,
      color: this.#colorVar,
      border: `1px solid ${this.#colorVar}`,
    };
  }

  onClick(): void {
    this.clicked.emit();
  }

  onMouseEnter(btn: any): void {
    btn.style.color = this.#white;
    btn.style.backgroundColor = this.#colorVar;
  }

  onMouseLeave(btn: any): void {
    btn.style.color = this.#colorVar;
    btn.style.backgroundColor = this.#white;
  }
}
