import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CentersComponent } from './centers.component';
import { CentersRoutingModule } from 'app/centers/centers-routing.module';
import { CentersService } from './centers.service';
import { CentersViewComponent } from './centers-view/centers-view.component';
import { GeneralTabComponent } from './centers-view/general-tab/general-tab.component';
import {PipesModule} from '../pipes/pipes.module';

@NgModule({
  imports: [
    CoreModule,
    CommonModule,
    CentersRoutingModule,
    FormsModule,
    MatTableModule,
    FlexLayoutModule,
    PipesModule

  ],
  declarations: [CentersComponent, CentersViewComponent, GeneralTabComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class CentersModule { }
