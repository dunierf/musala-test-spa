import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { GatewaysCollectionPageComponent } from './components/pages/gateways-collection-page/gateways-collection-page.component';
import { NewGatewayPageComponent } from './components/pages/new-gateway-page/new-gateway-page.component';
import { EditGatewayPageComponent } from './components/pages/edit-gateway-page/edit-gateway-page.component';

const routes: Routes = [
  {
    path: 'new-gateway',
    component: NewGatewayPageComponent
  },
  {
    path: 'gateway',
    component: EditGatewayPageComponent
  },
  {
    path: '**',
    component: GatewaysCollectionPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
