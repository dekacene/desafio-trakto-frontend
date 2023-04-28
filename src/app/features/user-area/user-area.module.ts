import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { UserAreaComponent } from './user-area.component';
import { UserAreaRoutingModule } from './user-area-routing.module';
import { ContentComponent } from './pages/content/content.component';
import { DashboardComponents } from './pages/dashboard/components';
import { UserAreaSharedComponents } from './shared/components';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    UserAreaComponent,
    ContentComponent,
    DashboardComponent,
    ...UserAreaSharedComponents,
    ...DashboardComponents,
  ],
  imports: [CommonModule, SharedModule, UserAreaRoutingModule],
})
export class UserAreaModule {}
