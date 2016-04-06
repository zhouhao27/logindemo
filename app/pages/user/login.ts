import {Page, NavController} from 'ionic-angular';
// import {Facebook,Toast} from 'ionic-native';
import {Facebook} from 'ionic-native';
import {HomePage} from '../home/home';

@Page({
  templateUrl: 'build/pages/user/login.html'
})
export class LoginPage {
  constructor(private nav: NavController) {}

  login() {
    Facebook.login(["public_profile"]).then((userData) => {
        var message = JSON.stringify(userData);
        alert(message);
        // Toast.showWithOptions({
        //   message: message,
        //   duration: "long",
        //   position: "bottom"
        // });
        Facebook.getAccessToken().then((token) => {
          alert("Token: " + token);
        });
        this.nav.setRoot(HomePage);
      }, (err) => {
        alert(err);
      });
  }
}
