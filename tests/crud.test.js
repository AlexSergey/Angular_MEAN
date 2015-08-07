var ADDRESS;
var updateId = 1;
var deleteId = 10;

var data = [
    {id: 1, name: 'name 1', description: 'Some text'},
    {id: 2, name: 'name 2', description: 'Some text'},
    {id: 3, name: 'name 3', description: 'Some text'},
    {id: 4, name: 'name 4', description: 'Some text'},
    {id: 5, name: 'name 5', description: 'Some text'},
    {id: 6, name: 'name 6', description: 'Some text'},
    {id: 7, name: 'name 7', description: 'Some text'},
    {id: 8, name: 'name 8', description: 'Some text'},
    {id: 9, name: 'name 9', description: 'Some text'},
    {id: 10, name: 'name 10', description: 'Some text'}
]

describe('CRUD test', function() {
    var httpBackend, http, controller, WorksServ;

    beforeEach(function () {
        module('app');
        module('app.config');
        inject(function (IP_ADDRESS, $rootScope, $controller, $httpBackend, $http, WorksService) {
            ADDRESS = IP_ADDRESS;
            WorksServ = WorksService;
            httpBackend = $httpBackend;
            controller = $controller;

            httpBackend.when("GET", ADDRESS + '/api/works').respond(data);

            $httpBackend.when("POST", ADDRESS + '/api/works').respond(function(method, url, dataFromClient, headers){
                data.push(angular.fromJson(dataFromClient));
                return [200, {}, {}];
            });

            $httpBackend.when("PUT", ADDRESS + '/api/works/' + updateId).respond(function(method, url, dataFromClient, headers){
                data[0] = JSON.parse(dataFromClient);
                return [200, {}, {}];
            });

            $httpBackend.when("DELETE", ADDRESS + '/api/works/' + deleteId).respond(function(method, url, dataFromClient, headers){
                console.log(deleteId)
                data.splice(deleteId, 1);
                return [200, {}, {}];
            });
        })
    });

    it("Get 10 works on server - test initPage method", function () {
        var scope = {};
        controller('indexCtrl', {
            $scope: scope,
            $http: http
        });

        scope.initPage();

        httpBackend.flush();
        expect(scope.workList.length).to.equal(10);
    });

    it("Post new work", function () {
        var scope = {};
        controller('indexCtrl', {
            $scope: scope,
            $http: http
        });

        scope.model = {
            id: 11,
            name: 'name 11',
            description: 'test'
        }

        scope.send();

        httpBackend.flush();
        expect(scope.workList.length).to.equal(11);
    });

    it("Update first work", function () {
        var scope = {};
        controller('indexCtrl', {
            $scope: scope,
            $http: http
        });

        scope.updateWork(updateId, {
            name: 'name 11',
            description: 'test'
        });

        httpBackend.flush();
        expect(scope.workList[0].name).to.equal('name 11');
    });

    it("Delete first work", function () {
        var scope = {};
        controller('indexCtrl', {
            $scope: scope,
            $http: http
        });
        scope.delete(deleteId);

        httpBackend.flush();

        expect(scope.workList[10]).to.be.undefined;
    });
})