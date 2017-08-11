import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as $ from 'jquery';

/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

 @Component({
 	selector: 'page-settings',
 	templateUrl: 'settings.html',
 })
 export class SettingsPage {

 	options=[
 	//{name: ""},
 	{name: "Themes"},
 	];

 	constructor(public navCtrl: NavController, public navParams: NavParams) {
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad SettingsPage');
 	}

 	settingsManager(name){
 		switch (name) {
 			case "Themes":
 				$(".toolbar-background").css({"background-color": "black"});
 				break;
 			
 			default:
 				alert("If you are seeing this, congratulations you broke the program somehow");
 				break;
 		}
 	}
 }
