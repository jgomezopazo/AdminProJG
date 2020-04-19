import { NgModule } from "@angular/core";

import { PagesComponent } from './pages.component';
import { Grafica1Component } from "./grafica1/grafica1.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { IncrementadorComponent } from './../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

import { SharedModule } from '../shared/shared.module';

import { PAGES_ROUTES } from './pages.routes';

import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    PagesComponent,  
    DashboardComponent, 
    ProgressComponent, 
    Grafica1Component,
    IncrementadorComponent,
    GraficoDonaComponent
    ],
    exports: [
      PagesComponent,  
      DashboardComponent, 
      ProgressComponent, 
      Grafica1Component,
      IncrementadorComponent,
      GraficoDonaComponent
    ],
    imports: [
      SharedModule,
      PAGES_ROUTES,
      FormsModule,
      ChartsModule
    ]
})
export class PagesModule { } 