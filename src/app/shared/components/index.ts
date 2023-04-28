import { NavBarComponent } from './nav-bar/nav-bar.component';

import { ButtonComponent } from './button/button.component';
import { IconButtonComponent } from './icon-button/icon-button.component';

const Buttons = [ButtonComponent, IconButtonComponent];

export const SharedModuleComponents = [NavBarComponent, ...Buttons];
