import { Component, ViewChild } from '@angular/core';
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
 	public maxPrepsWidth;
 	constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad SportsPage');

 		this.widgetInit();
 	}


 	widgetInit(){
 			this.maxPrepsWidth = 500;
			// this.maxPrepsWidgetSrc = "<p>"hi"</p>"
 	}

 }
