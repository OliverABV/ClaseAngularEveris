import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path:'main',
    component: MainComponent
  },
  {
    path:'header',
    component: HeaderComponent
  },
  {
    path:'menu',
    component: MenuComponent
  },
  {
    path:'**',
    component: MainComponent
  },

];

@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
