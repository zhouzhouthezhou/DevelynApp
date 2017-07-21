import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the SportsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-sports',
  templateUrl: 'sports.html',
})
export class SportsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SportsPage');
  }

 openMenu() {
 	this.menuCtrl.toggle();
 	// alert(this.menuCtrl.isOpen());
  //  this.navCtrl.popToRoot();
 }


	// goToHome(){
	// 	this.navCtrl.popToRoot();
	// }

	// goToSports(){
	// 	this.navCtrl.push(SportsPage);
	// }
}
