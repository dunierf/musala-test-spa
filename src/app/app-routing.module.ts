import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { GatewaysComponent } from './components/pages/gateways/gateways.component';
import { GatewayComponent } from './components/pages/gateway/gateway.component';

const routes: Routes = [
  {
    path: 'gateway',
    component: GatewayComponent
  },
  {
    path: '**',
    component: GatewaysComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
