angular.module('app').controller('workCtrl', ['$scope', 'WorksService', '$stateParams', function($scope, WorksService, $stateParams){
    $scope.workLoad = function() {
        WorksService.getWork($stateParams.work_id).then(function(data) {
            $scope.name = data.data.name;
        });
    };
}])