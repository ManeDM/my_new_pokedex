
//IMPORTS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'



//EXPORTS
import { AppComponent } from './app.component';
import { HeaderComponent } from './Shared/header/header.component';
import { PokeTableComponent } from './Shared/poke-table/poke-table.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokeTableComponent,
    FilterPipe,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
