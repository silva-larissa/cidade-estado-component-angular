import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, ResetPasswordFormModule, CreateAccountFormModule, ChangePasswordFormModule, LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { UnauthenticatedContentModule } from './unauthenticated-content';
import { AppRoutingModule } from './app-routing.module';
import { CidadeEstadoComponent } from './shared/components/cidade-estado/cidade-estado.component';
import { DxSelectBoxModule, DxTemplateModule, DxTextBoxModule } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
import { TesteComponent } from './pages/teste/teste.component';

@NgModule({
  declarations: [
    AppComponent,
    CidadeEstadoComponent,
    TesteComponent
  ],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    ResetPasswordFormModule,
    CreateAccountFormModule,
    ChangePasswordFormModule,
    LoginFormModule,
    UnauthenticatedContentModule,
    AppRoutingModule,
    BrowserModule,
    DxSelectBoxModule,
    DxTextBoxModule,
    DxTemplateModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    ScreenService,
    AppInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
