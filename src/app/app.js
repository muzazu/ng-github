import angular from 'angular';

// services
import { gitService } from 'Services';

// components
import { itemLists } from 'Components';

// stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';
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

    // load Data
    $scope.stateLoading = true;
    $scope.data = {items:[]};
    gitService.loadData().then(data => {
      $scope.data = data.data;
      $scope.stateLoading = false;
      console.log(data.data);
    });

    // selections for options
    $scope.sorts = gitService.sorts;
    // onchange event
    $scope.changeValue = function () {
      $scope.stateLoading = true;
      gitService.updateFilters($scope.repo, $scope.limit, $scope.page, $scope.sort);
      gitService.loadData().then(data => {
        $scope.data = data.data;
        $scope.stateLoading = false;
        console.log(data.data);
      });
    }
  }
}

const module_name = 'app';
angular.module(module_name, [])
  .controller('AppCtrl', AppCtrl)
  .directive('app', app)
  .service('gitService', gitService)
  .component('itemLists', itemLists);

export default module_name;