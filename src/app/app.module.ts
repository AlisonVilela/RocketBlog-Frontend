import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

import { ComponentModule } from 'app/components/component.module';
import { CoreModule } from 'app/core/core.module';
import { ServiceModule } from 'app/services/service.module';
import { Ng2Permission } from 'angular2-permission';

import * as Guards from 'app/guards'

import { AppComponent } from 'app/app.component';
import { AppRoutingModule } from 'app/app.routing.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    ComponentModule,
    ServiceModule.forRoot(),
    AppRoutingModule,
    Ng2Permission
  ],
  providers: [
    Guards.AppGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
