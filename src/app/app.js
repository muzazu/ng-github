import angular from 'angular';

// services
import gitService from './services/app.service';

// components

// stylesheets
import 'bootstrap/dist/css/bootstrap.css';
import '../style/app.css';

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
    console.log(gitService.loadData('angular', 10, 1));
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .directive('app', app)
  .service('gitService', gitService)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;