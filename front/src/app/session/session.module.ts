import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatProgressBarModule,
    MatToolbarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {LockScreenComponent} from './lockscreen/lockscreen.component';

import {SessionRoutes} from './session.routing';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [
        ReactiveFormsModule,
        CommonModule,
        FormsModule,
        MatIconModule,
        RouterModule.forChild(SessionRoutes),
        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatRadioModule,
        MatButtonModule,
        MatProgressBarModule,
        MatToolbarModule,
        FlexLayoutModule,
        HttpClientModule
    ],
    declarations: [
        LoginComponent,
        RegisterComponent,
        ForgotPasswordComponent,
        LockScreenComponent,
    ]
})

export class SessionModule {
}
