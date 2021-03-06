angular.module('app.main', ['infinite-scroll', 'angularModalService', 'angular-advanced-searchbox', 'multipleSelection', 'ngAnimate', 'ui.bootstrap']);
angular.module('app.popup', []);

angular.module('app', ['app.main', 'app.popup'])
  
  .config(['$compileProvider', '$locationProvider', function($compileProvider, $locationProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|chrome):/);
    
    $locationProvider.html5Mode({
    	enabled: true,
    	requireBase: false
    });

   }
  ]);
