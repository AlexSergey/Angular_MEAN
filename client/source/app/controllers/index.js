angular.module('app').controller('indexCtrl', ['$scope', 'WorksService', function($scope, WorksService){
    $scope.update = [];

    function updateWorks() {
        WorksService.getWorks().then(function(data) {
            $scope.workList = data.data;
        });
    }

    $scope.initPage = function() {
        updateWorks();
        setTimeout(function() {
            $scope.done = null;
        }, 2000);
    };

    $scope.send = function() {
        WorksService.addWork($scope.model).success(function(data) {
            $scope.model.name = null;
            $scope.model.age = null;
            $scope.done = data.message;
            updateWorks();
        });
    };

    $scope.delete = function(id) {
        WorksService.deleteWork(id).success(function(data) {
            $scope.done = data.message;
            updateWorks();
        });
    };

    $scope.showUpdate = function($index) {
        $scope.update[$index] = $scope.update[$index] === undefined ? true: undefined;
    };

    $scope.updateWork = function(id, data) {
        WorksService.updateWork(id, data).success(function(data) {
            $scope.done = data.message;
            updateWorks();
        });
    };
}])