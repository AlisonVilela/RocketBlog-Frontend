import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

import { ComponentModule } from 'app/components/component.module';
import { CoreModule } from 'app/core/core.module';
import { ServiceModule } from 'app/services/service.module';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
