import { ProductosModule } from './productos/productos.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FooterComponent } from './footer/footer.component';
import { ListClientesComponent } from './clientes/list-clientes/list-clientes.component';
import { NewClientesComponent } from './clientes/new-clientes/new-clientes.component';

import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavMenuComponent,
    FooterComponent,
    ListClientesComponent,
    NewClientesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    FormsModule,
    HttpClientModule,
    ProductosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
