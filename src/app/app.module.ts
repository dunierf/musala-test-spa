import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Layout
import { LayoutComponent } from './components/layout/layout/layout.component';
import { ToolbarComponent } from './components/layout/toolbar/toolbar.component';
import { ContentComponent } from './components/layout/content/content.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { MenuComponent } from './components/layout/menu/menu.component';

// Pages
import { NewGatewayPageComponent } from './components/pages/new-gateway-page/new-gateway-page.component';
import { GatewaysCollectionPageComponent } from './components/pages/gateways-collection-page/gateways-collection-page.component';
import { EditGatewayPageComponent } from './components/pages/edit-gateway-page/edit-gateway-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ToolbarComponent,
    ContentComponent,
    SidebarComponent,
    MenuComponent,
    NewGatewayPageComponent,
    GatewaysCollectionPageComponent,
    EditGatewayPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
