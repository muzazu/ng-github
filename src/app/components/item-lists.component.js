import './item-lists.css';

class itemLists {
    constructor(gitService,$scope) {
        // loading state
        $scope.stateLoading = true;
        
        $scope.get = function () {
            return "LOL";
        }
        
        // add ability to reload data on change
        $scope.reload = function () {
            gitService.loadData().then(function (res) {
                $scope.stateLoading = false;
                $scope.data = res.data;
            });
        }
        // load the data
        $scope.reload();

        // trigger reload data when parent need
        $scope.$on('reloadData', function () {
            $scope.stateLoading = true;
            $scope.reload();
        });
    }
};
itemLists.$inject = ['gitService','$scope'];
export default itemLists;