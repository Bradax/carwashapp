// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'pascalprecht.translate', 'starter.controllers'])

.run(function($ionicPlatform) {
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
})

.config(function($stateProvider, $urlRouterProvider, $translateProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.firstRegister', {
    url: '/register',
    views: {
      'menuContent': {
        templateUrl: 'templates/first-register.html',
        controller: 'FirstRegCtrl'
      }
    }
  })

  .state('app.washes', {
      url: '/washes',
      views: {
        'menuContent': {
          templateUrl: 'templates/washes-list.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/washes/add',
      views: {
        'menuContent': {
          templateUrl: 'templates/add-wash.html',
          controller: 'AddWashCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/register');

      $translateProvider.useStaticFilesLoader({
        prefix: 'languages/lang-',
        suffix: '.json'
      });
      $translateProvider.useSanitizeValueStrategy('escapeParameters');
});
