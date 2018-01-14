import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { SessionsPage } from '../pages/sessions/sessions';
import { TabsPage } from '../pages/tabs/tabs';
import { QuestionComponent } from '../components/question/question'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SessionProvider } from '../providers/session/session';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    SessionsPage,
    TabsPage,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    SessionsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SessionProvider
  ]
})
export class AppModule {}
