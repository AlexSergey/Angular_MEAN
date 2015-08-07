angular.module('app').config(['$stateProvider', '$locationProvider', function ($stateProvider, $locationProvider) {
    var mainLayout = {
        name: 'main',
        views: {
            'appView': {
                templateProvider: ['$templateCache', function($templateCache){
                    return $templateCache.get("templates/index-layout.tpl.html");
                }]
            }
        }
    }
    var worksList = {
        name: 'worksList',
        parent: mainLayout,
        url: '/',
        views: {
            'content': {
                templateProvider: ['$templateCache', function($templateCache){
                    return $templateCache.get("templates/works-list.tpl.html");
                }],
                controller: 'indexCtrl'
            }
        }
    }
    var work = {
        name: 'work',
        parent: mainLayout,
        url: '/works/:work_id',
        views: {
            'content': {
                templateProvider: ['$templateCache', function($templateCache){
                    return $templateCache.get("templates/work.tpl.html");
                }],
                controller: 'workCtrl'
            }
        }
    }

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    //Index Layout
    $stateProvider.state(mainLayout);
    //States
    $stateProvider.state(worksList);
    $stateProvider.state(work);

}])