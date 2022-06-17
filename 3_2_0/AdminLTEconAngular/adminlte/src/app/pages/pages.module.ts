import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProductosComponent } from './productos/productos.component';
import { PagesComponent } from './pages.component';



@NgModule({
  declarations: [
    DashboardComponent,
    UsuariosComponent,
    ProductosComponent,
    PagesComponent    
  ],
  exports:[
    DashboardComponent,
    UsuariosComponent,
    ProductosComponent    
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
