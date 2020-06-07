import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IconsModule } from './icons/icons.module';
import { CreatePointComponent } from './create-point/create-point.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreatePointComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
