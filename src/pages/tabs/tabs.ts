import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { SessionsPage } from '../sessions/sessions'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  public tab1Root = HomePage;
  public tab2Root = SessionsPage;
  public tab3Root = AboutPage;

  constructor() {

  }
}
