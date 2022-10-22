import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {HeaderComponent} from "./components/header/header.component";
import {MaterialTableComponent} from "./components/materialUI/table/material-table.component";
import {HOCComponent} from './components/hoc/hoc.component';
import {MaterialTabComponent} from "./components/materialUI/tab/material-tab.component";
import {en_US, NZ_I18N} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule} from '@angular/forms';
import {AntDesignTabComponent} from "./components/antDesign/tab/ant-design-tab.component";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BootstapTabComponent} from './components/ngBootStrap/bootstap-tab/bootstap-tab.component';
import {BootstrapTableComponent} from './components/ngBootStrap/bootstap-table/bootstrap-table.component';
import {NgbdSortableHeader} from "./components/ngBootStrap/bootstap-table/sortDirective";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HOCComponent,
    BootstapTabComponent,
    BootstrapTableComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatTableModule,
        MatSortModule,
        MaterialTableComponent,
        HeaderComponent,
        MaterialTabComponent,
        FormsModule,
        AntDesignTabComponent,
        NgbModule,
        NgbdSortableHeader
    ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
