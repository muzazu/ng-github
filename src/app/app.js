import angular from 'angular';

// services
import gitService from './services/app.service';

// components
import itemLists from "./components/item-lists.component";

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
  constructor() {
    this.items = "sadasdads";
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .controller('AppCtrl', AppCtrl)
  .directive('app', app)
  .service('gitService', gitService)
  .component('itemLists', {
    template: require('./components/item-lists.html'),
    controller: itemLists
  });

export default MODULE_NAME;