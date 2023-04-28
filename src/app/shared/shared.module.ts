import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModuleComponents } from './components';

@NgModule({
  declarations: [...SharedModuleComponents],
  exports: [...SharedModuleComponents],
  imports: [CommonModule],
})
export class SharedModule {}
