import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the SportsListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
 @Component({
 	selector: 'sports-list',
 	templateUrl: 'sports-list.html'
 })
 export class SportsListComponent {

 	popoverItemList = [
 	//{name: "", url: ""},
 	{name: "General News", url: ""},
 	{name: "Boy's Baseball", url: "gendersport=boys,baseball&"}, 
 	{name: "Girl's Softball", url: "gendersport=girls,softball&season=fall&"}, 
 	{name: "Boy's Basketball", url: "gendersport=boys,basketball&"},
 	{name: "Girl's Basketball", url: "gendersport=girls,basketball&"},
 	{name: "Boy's Cross Country", url: "gendersport=boys,crosscountry&"},
 	{name: "Girl's Cross Country", url: "gendersport=girls,crosscountry&"},
 	{name: "Boy's Football", url: "gendersport=boys,football&"},
 	{name: "Boy's Golf", url: "gendersport=boys,golf&"},
 	{name: "Girl's Golf", url: "gendersport=girls,golf&season=spring&"},
 	{name: "Boy's Soccer", url: "gendersport=boys,soccer&"},
 	{name: "Girl's Soccer", url: "gendersport=girls,soccer&season=spring&"},
 	{name: "Boy's Swimming & Diving", url: "gendersport=boys,swimming&"},
 	{name: "Girl's Swimming & Diving", url: "gendersport=girls,swimming&"},
 	{name: "Boy's Tennis", url: "gendersport=boys,tennis&season=fall&"},
 	{name: "Girl's Tennis", url: "gendersport=girls,tennis&season=spring&"},
 	{name: "Boy's Track & Field", url: "gendersport=boys,trackfield&"},
 	{name: "Girl's Track & Field", url: "gendersport=girls,trackfield&"},
 	{name: "Girl's Volleyball", url: "gendersport=girls,volleyball&"},
 	];

 	constructor(private viewCtrl: ViewController) {
 	}

 	setSelectedTitle(selectedItem){
 		for(var i = 0; i < this.popoverItemList.length; i++){
 			if(this.popoverItemList[i].name == selectedItem){
 				this.viewCtrl.dismiss(this.popoverItemList[i].url);
 			}
 		}
 	}

 }
