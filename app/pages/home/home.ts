import {Page,NavController} from 'ionic-angular';
import {Facebook} from 'ionic-native';
import {LoginPage} from '../user/login';

declare var Parse: any;

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private nav: NavController) {}

  logout() {
    Facebook.logout()
    .then( () => {
      this.nav.setRoot(LoginPage);
    });
  }
}
