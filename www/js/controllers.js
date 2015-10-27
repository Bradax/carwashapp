angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('WashesListCtrl', [ '$scope', '$state', '$cordovaDialogs', function($scope, $state, $cordovaDialogs) {
        $scope.addWash = function() {
            $cordovaDialogs.prompt('Please pass the phone to the staff to enter the passphrase.', 'Passphrase', ['Cancel','Submit'], 'Passphrase')
                .then(function(result) {
                    var input = result.input1; //this is the input
                    var btnIndex = result.buttonIndex; //this is the button index 1:Cancel, 2:Submit
                    if (btnIndex === 2) {
                        if (input === $scope.passphrase) {
                            // todo check for multiple cars
                            // todo select car, and add a wash to it
                            $cordovaDialogs.alert("You have successfully checked in for 1 wash!", "Congratulations", "OK");
                        } else if (input === 'Passphrase' || input !== $scope.passphrase){ //wrong input
                            $cordovaDialogs.alert("Invalid passphrase", "Uh ohh..", "OK")
                        }
                    } else {
                        // TODO if user pressed Cancel

                    }

                });
        };

        $scope.washes = [
            {
                id: "",
                date: "",
                car: ""
            }
        ];

        $scope.passphrase = "fantastic";

    }])

.controller('AddWashCtrl', ['$scope', function($scope) {
        $scope.passphrase = "fantastic";

}])

.controller('CarsListCtrl', ['$scope', '$state', '$localStorage', function($scope, $state, $localStorage) {
       //TODO
        //$scope.idCounter = 1;

        //$scope.cars = [
        //    {
        //        id: '1',
        //        manufacturer: "Proton",
        //        model: "Saga",
        //        color: "Black",
        //        plate: "WB 1629 P",
        //        img: "http://www.deluxevectors.com/images/vector_images/thumb/sports-car-vector-image.jpg",
        //        washes: 2
        //    },
        //    {
        //        id: '2',
        //        manufacturer: "Nissan",
        //        model: "Almera",
        //        color: "Silver",
        //        plate: "BMW 2112",
        //        img: "http://cdn.paultan.org/image/2015/01/01-New-Nissan-Almera_NISMO-630x346.jpg",
        //        washes: 2
        //
        //    },
        //    {
        //        id: '3',
        //        manufacturer: "Audi",
        //        model: "R8",
        //        color: "White",
        //        plate: "WWW 714",
        //        img: "https://upload.wikimedia.org/wikipedia/commons/a/a3/E-tron_(Audi)_at_IAA_-_front.JPG",
        //        washes: 2
        //    }
        //];
        $scope.cars = $localStorage.cars;


        $scope.addCar = function() {
            $state.go('app.cars_add');
        }
}])

.controller('CarsAddCtrl', ['$scope', '$localStorage', '$state', function($scope, $localStorage, $state) {
        $scope.saveData = function(manufacturer, model, color, plate) {
          $localStorage.cars = [
              {"id": model + plate, "manufacturer" : manufacturer, "model": model, "color": color, "plate": plate}
          ];
            alert($localStorage.cars);
            $state.go('app.cars');
        };
    }])

.controller('AboutCtrl', [ '$scope', function($scope) {

}]);
