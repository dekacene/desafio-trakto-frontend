import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { CategoryModuleComponents } from './components';

@NgModule({
  declarations: [CategoryComponent, ...CategoryModuleComponents],
  imports: [CommonModule, CategoryRoutingModule, SharedModule],
})
export class CategoryModule {}
