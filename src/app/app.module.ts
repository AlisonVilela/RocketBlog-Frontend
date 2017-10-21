import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ComponentModule } from 'app/components/component.module';
import { CoreModule } from 'app/core/core.module';
import { PageModule } from 'app/pages/page.module';
import { ServiceModule } from 'app/services/service.module';

import { AppComponent } from 'app/app.component';
import { MainComponent } from 'app/main.component';
import { AppRoutingModule } from 'app/app.routing.module'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    ComponentModule,
    CoreModule,
    PageModule,
    ServiceModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
