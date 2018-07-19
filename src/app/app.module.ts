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
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { NewPasswordComponent } from './auth/new-password/new-password.component';
import { UserActivityComponent } from './secure/user-activity/user-activity.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ResendComponent } from './auth/resend/resend.component';
import { ConfirmComponent } from './auth/confirm/confirm.component';
import { AccountComponent } from './account/account.component';
import { EnumToStringPipe } from './pipes/enum-to-string.pipe';

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
    ConfirmComponent,
    AccountComponent,
    EnumToStringPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatToolbarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
