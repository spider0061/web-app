import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { PopoverArrowDirective } from './popover/popover-arrow.directive';
import { PopoverCloseDirective } from './popover/popover-close.directive';
import { PopoverComponent } from './popover/popover.component';
import { ConfigurationWizardComponent } from './configuration-wizard.component';
import { ContinueOfficeSetupDialogComponent } from './continue-office-setup-dialog/continue-office-setup-dialog.component';

import { SharedModule } from '../shared/shared.module';
import { NextStepDialogComponent } from './next-step-dialog/next-step-dialog.component';

@NgModule({
  declarations: [PopoverComponent, PopoverCloseDirective, PopoverArrowDirective, ConfigurationWizardComponent, ContinueOfficeSetupDialogComponent, NextStepDialogComponent ],
  imports: [
    SharedModule,
    CommonModule,
    OverlayModule,
    PortalModule,
    MatDialogModule
  ],
  exports: [
    PopoverCloseDirective
  ],
  entryComponents: [PopoverComponent, ConfigurationWizardComponent, ContinueOfficeSetupDialogComponent, NextStepDialogComponent ]
})
export class ConfigurationWizardModule { }
