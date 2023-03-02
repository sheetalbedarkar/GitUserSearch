import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FpHeaderComponent } from './component/fp-header/fp-header.component';
import { FpHistoryComponent } from './component/fp-history/fp-history.component';
import { FpHomeComponent } from './component/fp-home/fp-home.component';
import { SearchPipePipe } from './common/search-pipe.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FpHeaderComponent,
    FpHistoryComponent,
    FpHomeComponent,
    SearchPipePipe
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
