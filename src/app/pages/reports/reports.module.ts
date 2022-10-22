import { NgModule } from '@angular/core';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports/reports.component';
import { SharedModule } from '@finan$ys/shared/shared.module';
import { ReportsCardComponent } from '@finan$ys/pages/reports/reports-card';


@NgModule({
  declarations: [ ReportsComponent, ReportsCardComponent ],
  imports: [
    SharedModule,
    ReportsRoutingModule,
  ],
})
export class ReportsModule {
}
