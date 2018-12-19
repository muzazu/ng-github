import angular from 'angular';
import '../style/app.css';
import 'bootstrap/dist/css/bootstrap.css';
import gitService from './services/app.service';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor(gitService) {
    this.url = 'https://github.com/preboot/angular-webpack';
    this.data = gitService.data;
    console.log(this.data);
  }
}

AppCtrl.$inject = ['gitService'];

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .directive('app', app)
  .service('gitService', ['$http',gitService])
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;