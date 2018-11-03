import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailComponent } from './detail/detail.component';
import { CaptureComponent } from './capture/capture.component';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: CaptureComponent },
  { path: 'facture/detail', component: InvoiceDetailComponent },
  { path: 'search', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
