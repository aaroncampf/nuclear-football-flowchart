import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { Menu_Top }   from './Menu_Top';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [AppComponent, Menu_Top ],
    bootstrap: [AppComponent, Menu_Top]
})
export class AppModule { }
