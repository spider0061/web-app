import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Routing Imports */
import { Route } from '../core/route/route.service';

/** Translation Imports */
import { extract } from '../core/i18n/i18n.service';

/** Custom Components */
import { CentersComponent } from './centers.component';
import { CentersViewComponent } from './centers-view/centers-view.component';
import { GeneralTabComponent } from './centers-view/general-tab/general-tab.component';

/** Custom Resolvers */
import { CenterViewResolver } from './common-resolvers/center-view.resolver';
import { CenterSummaryResolver } from './common-resolvers/center-summary.resolver';
import { CenterDataResolver } from './common-resolvers/center-data.resolver';
import { CenterAccountsResolver } from './common-resolvers/center-accounts.resolver';

const routes: Routes = [

   Route.withShell([{
    path: 'centers',
    data: { title: extract('Centers'), breadcrumb: 'Centers', routeParamBreadcrumb: false },
    children: [
      {
        path: '',
        component: CentersComponent,
      },
      {
        path: ':centerId',
        data: { title: extract('Centers View'), breadcrumb: false  },
        children: [
          {
            path: '',
            component: CentersViewComponent,
            data: { title: extract('View Office'), routeResolveBreadcrumb: ['centerViewData', 'name'] },
            resolve: {
              centerViewData: CenterViewResolver
            },
            children: [
              {
                path: 'general',
                component: GeneralTabComponent,
                resolve: {
                  centerSummaryData: CenterSummaryResolver,
                  centerData: CenterDataResolver,
                  centerAccountsData: CenterAccountsResolver
                },
              }
            ]

          },

        ]
      }

    ]
  }
  ])

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
  CenterViewResolver,
  CenterSummaryResolver,
  CenterDataResolver,
  CenterAccountsResolver
  ]
})
export class CentersRoutingModule { }
