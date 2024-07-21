import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeroComponent } from './layout/hero/hero.component';
import { PracticeAreaComponent } from './layout/practice-area/practice-area.component';
import { ServicesComponent } from './layout/services/services.component';
import { AboutComponent } from './layout/about/about.component';
import { ContactComponent } from './layout/contact/contact.component';
import { HeaderComponent } from './layout/header/header.component';
import { InformationComponent } from './layout/information/information.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeroComponent,
    PracticeAreaComponent,
    ServicesComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    InformationComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: false }),
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
