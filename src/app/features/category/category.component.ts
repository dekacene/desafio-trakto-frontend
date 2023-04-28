import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { environment } from '@env/environment';
import { Category } from './interfaces/category.interface';

@Component({
  selector: 'tk-categories',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  #categoryIconsPath = 'assets/icons/category';

  constructor(private _title: Title) {
    this._title.setTitle(`${environment.baseTabTitle} - Categorias`);
  }

  categories: Category[] = [
    {
      title: 'Material Didático',
      icon: `${this.#categoryIconsPath}/icon-study-book.png`,
      color: '--tk-lightblue-dark',
    },
    {
      title: 'Quiz',
      icon: `${this.#categoryIconsPath}/icon-medal.png`,
      color: '--tk-green-light',
    },
    {
      title: 'Desenho',
      icon: `${this.#categoryIconsPath}/icon-brush.png`,
      color: '--tk-pink-neutral',
    },
    {
      title: 'YouTube',
      icon: `${this.#categoryIconsPath}/icon-youtube.png`,
      color: '--tk-red-light',
    },
  ];
}
