import { NgModule, Optional, SkipSelf } from '@angular/core';

// Modules
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Services
import { GatewayService } from './services/gateway/gateway.service';
import { DeviceStatusService } from './services/device/device-status/device-status.service';
import { DeviceService } from './services/device/device/device.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    GatewayService,
    DeviceStatusService,
    DeviceService
  ],
  exports: [
    HttpClientModule
  ]
})
export class CoreModule { 

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {

    if (parentModule)
      throw new Error('CoreModule has already been loaded. You should only import Core modules in the AppModule only.');
      
  }

}
