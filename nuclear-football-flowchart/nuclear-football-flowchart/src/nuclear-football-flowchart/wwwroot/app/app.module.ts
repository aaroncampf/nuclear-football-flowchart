import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { MenuTopComponent }   from './Menu Top/menuTop.component';
import { TestPlatformComponent }   from './TestPlatform/testplatform.component';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [AppComponent, MenuTopComponent, TestPlatformComponent ],
    bootstrap: [AppComponent]
})
export class AppModule { }
