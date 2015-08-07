angular.module('app').service('WorksService', ['$http', 'IP_ADDRESS', function($http, IP_ADDRESS) {
    return {
        getWork: function (id) {
            return $http.get(IP_ADDRESS + '/api/works/' + id);
        },

        getWorks: function () {
            return $http.get(IP_ADDRESS + '/api/works');
        },

        addWork: function(data) {
            return $http.post(IP_ADDRESS + '/api/works', data);
        },

        updateWork: function(id, data) {
            return $http.put(IP_ADDRESS + '/api/works/' + id, data);
        },

        deleteWork: function(id) {
            return $http.delete(IP_ADDRESS + '/api/works/' + id);
        }
    }
}])