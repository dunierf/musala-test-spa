import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutComponent } from './components/layout/layout/layout.component';
import { ToolbarComponent } from './components/layout/toolbar/toolbar.component';
import { ContentComponent } from './components/layout/content/content.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { MenuComponent } from './components/layout/menu/menu.component';
import { GatewaysComponent } from './components/pages/gateways/gateways.component';
import { GatewayComponent } from './components/pages/gateway/gateway.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ToolbarComponent,
    ContentComponent,
    SidebarComponent,
    MenuComponent,
    GatewaysComponent,
    GatewayComponent
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
