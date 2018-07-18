import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CreateGameComponent } from './create-game/create-game.component';
import { FindGamesComponent } from './find-games/find-games.component';
import { ViewGameComponent } from './view-game/view-game.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { NewPasswordComponent } from './auth/new-password/new-password.component';
import { UserActivityComponent } from './secure/user-activity/user-activity.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ResendComponent } from './auth/resend/resend.component';
import { ConfirmComponent } from './auth/confirm/confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    LoginComponent,
    RegisterComponent,
    CreateGameComponent,
    FindGamesComponent,
    ViewGameComponent,
    HomeComponent,
    AdminHomeComponent,
    NewPasswordComponent,
    UserActivityComponent,
    ForgotPasswordComponent,
    ResendComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
