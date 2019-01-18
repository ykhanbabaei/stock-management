import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockDetailComponent } from './stock-detail/stock-detail.component';
import { RegisterGroupComponent } from './stock-detail/register-group/register-group.component';
import { EquipmentTypeComponent } from './stock-detail/equipment-type/equipment-type.component';
import { StockInfoComponent } from './stock-detail/stock-info/stock-info.component';
import {
    MAT_RIPPLE_GLOBAL_OPTIONS,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorIntl,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    MatDatepickerModule
  } from '@angular/material';

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
    AppRoutingModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatCardModule,
    MatTooltipModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatRadioModule,
    MatSnackBarModule,
    MatTabsModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSelectModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatSortModule,
    MatChipsModule,
    MatProgressBarModule,
    MatTreeModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
