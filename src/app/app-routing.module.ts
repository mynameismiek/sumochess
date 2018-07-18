import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { NewPasswordComponent } from './auth/new-password/new-password.component';
import { FindGamesComponent } from './find-games/find-games.component';
import { ViewGameComponent } from './view-game/view-game.component';
import { CreateGameComponent } from './create-game/create-game.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'newPassword', component: NewPasswordComponent },
  { path: 'create', component: CreateGameComponent },
  { path: 'find', component: FindGamesComponent },
  { path: 'view/:id', component: ViewGameComponent },
  { path: 'view', component: ViewGameComponent },
  { path: 'admin', component: AdminHomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
