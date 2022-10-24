import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from "./components/header/header.component";
import {HOCComponent} from './components/hoc/hoc.component';
import {MaterialTabComponent} from "./components/materialUI/tab/material-tab.component";
import {en_US, NZ_I18N} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {AntDesignTabComponent} from "./components/antDesign/tab/ant-design-tab.component";
import {BootstrapTabComponent} from './components/ngBootStrap/bootstap-tab/bootstrap-tab.component';
import {NgxsModule} from "@ngxs/store";
import {AppState} from "./ngRx/states/app.state";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HOCComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HeaderComponent,
    MaterialTabComponent,
    AntDesignTabComponent,
    BootstrapTabComponent,
    NgxsModule.forRoot([AppState])
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
