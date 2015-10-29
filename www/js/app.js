// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'pascalprecht.translate', 'starter.controllers', 'ngCordova', 'ngStorage', 'starter.services'])

.run(['$ionicPlatform', function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
}])

.config(function($stateProvider, $urlRouterProvider, $translateProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html'
  })

  .state('app.washes', {
      url: '/washes',
      views: {
        'menuContent': {
          templateUrl: 'templates/washes-list.html',
          controller: "WashesListCtrl"
        }
      }
    })
    .state('app.washes_add', {
      url: '/washes/add',
      views: {
        'menuContent': {
          templateUrl: 'templates/washes-add.html',
          controller: 'AddWashCtrl'
        }
      }
    })

  .state('app.cars', {
    url: '/cars',
    views: {
      'menuContent': {
        templateUrl: 'templates/cars-list.html',
        controller: 'CarsListCtrl'
      }
    }
  })

  .state('app.cars_add', {
    url: '/cars/add',
    views: {
      'menuContent': {
        templateUrl: 'templates/cars-add.html',
        controller: 'CarsAddCtrl'
      }
    }
  })

  .state('app.avatars', {
      url: '/avatars',
      views: {
          'menuContent': {
              templateUrl: 'templates/avatars.html',
              controller: 'AvatarsCtrl'
          }
      }
  })

  .state('app.about', {
      url: '/about',
      views: {
          'menuContent': {
              templateUrl: 'templates/about.html',
              controller: 'AboutCtrl'
          }
      }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/cars');

      $translateProvider.useStaticFilesLoader({
        prefix: 'languages/lang-',
        suffix: '.json'
      });
      $translateProvider.useSanitizeValueStrategy('escapeParameters');
});
