import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SportsPage } from '../pages/sports/sports';
import { SettingsPage } from '../pages/settings/settings';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = HomePage;

  pages = [
  //{name: "", page: },
  {name: "Home", page: HomePage},
  {name: "Sports", page: SportsPage},
  {name: "Settings", page: SettingsPage},
  ];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

  }

  showSubmenu: boolean = false;

  goToPage(page){
    this.showSubmenu = false;
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  menuItemHandler(): void {
    this.showSubmenu = !this.showSubmenu;
  }
}

