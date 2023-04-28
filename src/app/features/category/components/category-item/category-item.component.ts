import { Component, Input, OnInit } from '@angular/core';

import { Category } from '../../interfaces/category.interface';

@Component({
  selector: 'tk-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss'],
})
export class CategoryItemComponent implements OnInit {
  @Input()
  category: Category;

  color: string = '';

  ngOnInit(): void {
    const { color: _color } = this.category;
    this.color = _color.startsWith('--') ? `var(${_color})` : _color;
  }
}
