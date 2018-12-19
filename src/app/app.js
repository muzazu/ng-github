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
  constructor(gitService,$scope) {
    // default value for models
    $scope.repo = gitService.repo;
    $scope.sort = gitService.sort;
    $scope.page = gitService.page;
    $scope.limit = gitService.limit;

    // selections for options
    $scope.sorts = gitService.sorts;

    $scope.changeValue = function () {
      gitService.updateFilters($scope.repo, $scope.limit, $scope.page, $scope.sort);     
      $scope.$broadcast('reloadData');
    }
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