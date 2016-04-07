import 'es6-shim';
import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {LoginPage} from './pages/user/login'

declare var Parse : any;

@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  //rootPage: any = HomePage;
  rootPage : any = null;

  constructor(platform: Platform) {

    // debugger;
    Parse.initialize("myAppId");
    Parse.serverURL = 'http://localhost:1337/parse'

    if (Parse.User.current()) {
      this.rootPage = HomePage;
    } else {
      this.rootPage = LoginPage;
    }

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
