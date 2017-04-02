import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FavouritesPage } from '../favourites/favourites';
import { LibraryPage } from '../library/library';

/*
  Generated class for the Tabs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  favouritesPage = FavouritesPage;
  libraryPage = LibraryPage;
}
