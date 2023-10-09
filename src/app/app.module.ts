import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './pages/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { PopupComponent } from './popup/popup.component';
import { AdditionalArrayComponent } from './additional-array/additional-array.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PopupComponent,
    AdditionalArrayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
