import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockDetailComponent } from './stock-detail/stock-detail.component';
import { RegisterGroupComponent } from './stock-detail/register-group/register-group.component';
import { EquipmentTypeComponent } from './stock-detail/equipment-type/equipment-type.component';
import { StockInfoComponent } from './stock-detail/stock-info/stock-info.component';

@NgModule({
  declarations: [
    AppComponent,
    StockDetailComponent,
    RegisterGroupComponent,
    EquipmentTypeComponent,
    StockInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
