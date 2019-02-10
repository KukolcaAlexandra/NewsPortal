import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SourceComboBoxComponent } from './source-combo-box/source-combo-box.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsComponent } from './news/news.component';
import { RouterModule, Routes } from '@angular/router';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { MainComponent } from './main/main.component';
import { FilterComponent } from './filter/filter.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FormsModule }   from '@angular/forms';

const AppRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'news/:id', component: NewsDetailsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ControlPanelComponent,
    SourceComboBoxComponent,
    NewsListComponent,
    NewsComponent,
    NewsDetailsComponent,
    MainComponent,
    FilterComponent,
    CheckboxComponent
  ],
  imports: [
    RouterModule.forRoot(AppRoutes),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
