import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

// My modules
import { CoreModule } from './core/core.module';


// Layout
import { LayoutComponent } from './components/layout/layout/layout.component';
import { ToolbarComponent } from './components/layout/toolbar/toolbar.component';
import { ContentComponent } from './components/layout/content/content.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar/sidebar.component';
import { MobileTabletSidebarComponent } from './components/layout/sidebar/mobile-tablet-sidebar/mobile-tablet-sidebar.component';
import { MenuComponent } from './components/layout/menu/menu.component';

// Pages
import { NewGatewayPageComponent } from './components/pages/new-gateway-page/new-gateway-page.component';
import { GatewaysCollectionPageComponent } from './components/pages/gateways-collection-page/gateways-collection-page.component';
import { EditGatewayPageComponent } from './components/pages/edit-gateway-page/edit-gateway-page.component';

// Forms
import { FormGatewayComponent } from './components/ui/forms/form-gateway/form-gateway.component';

// Components
import { CardComponent } from './components/ui/card/card/card.component';
import { CardCaptionComponent } from './components/ui/card/card-caption/card-caption.component';
import { GatewayCollectionComponent } from './components/ui/gateway/gateway-collection/gateway-collection.component';
import { GatewayCollectionRowComponent } from './components/ui/gateway/gateway-collection-row/gateway-collection-row.component';




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
    FormGatewayComponent,
    CardCaptionComponent,
    GatewayCollectionComponent,
    GatewayCollectionRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
