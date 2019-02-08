import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SourceComboBoxComponent } from './source-combo-box/source-combo-box.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    ControlPanelComponent,
    SourceComboBoxComponent,
    NewsListComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
