import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RootRouter } from './app.routes';
import { ErrorComponent } from './containers/error/error.component';
import { HomeModule } from './containers/home/home.module';
import { RouteReuseStrategy } from '@angular/router';
import { CustomReuseService } from 'app/services/custom-reuse.service';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    RootRouter
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: CustomReuseService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
