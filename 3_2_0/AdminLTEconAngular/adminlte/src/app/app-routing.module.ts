import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages-routing.module';

//Ruta Padre -> Aqui van las rutas de la app
const routes: Routes = [
  {path:'', redirectTo:'/dashboard', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    PagesRoutingModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
