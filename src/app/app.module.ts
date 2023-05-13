import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


// Layout
import { LayoutComponent } from './components/layout/layout/layout.component';
import { ToolbarComponent } from './components/layout/toolbar/toolbar.component';
import { ContentComponent } from './components/layout/content/content.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar/sidebar.component';
import { MenuComponent } from './components/layout/menu/menu.component';

// Pages
import { NewGatewayPageComponent } from './components/pages/new-gateway-page/new-gateway-page.component';
import { GatewaysCollectionPageComponent } from './components/pages/gateways-collection-page/gateways-collection-page.component';
import { EditGatewayPageComponent } from './components/pages/edit-gateway-page/edit-gateway-page.component';
import { MobileTabletSidebarComponent } from './components/layout/sidebar/mobile-tablet-sidebar/mobile-tablet-sidebar.component';
import { CardComponent } from './components/ui/card/card.component';
import { InputIpv4AddressComponent } from './components/ui/input-ipv4-address/input-ipv4-address.component';
import { FormGatewayComponent } from './components/ui/forms/form-gateway/form-gateway.component';
import { FormDeviceComponent } from './components/ui/forms/form-device/form-device.component';

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
    EditGatewayPageComponent,
    MobileTabletSidebarComponent,
    CardComponent,
    InputIpv4AddressComponent,
    FormGatewayComponent,
    FormDeviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
