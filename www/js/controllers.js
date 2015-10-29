angular.module('starter.controllers', ['starter.services'])

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

    .controller('CarsListCtrl', ['$scope', '$state', '$cordovaDialogs', 'StorageServices', function($scope, $state, $cordovaDialogs, StorageServices) {
       //TODO

        $scope.cars = StorageServices.loadDB();


        $scope.addCar = function() {
            $state.go('app.cars_add');
        };

        $scope.deleteCar = function(id) {
            //TODO
            $cordovaDialogs.confirm('Are you sure?', 'Delete Car', [''])
        };
    }])

    .controller('CarsAddCtrl', ['$scope', '$state', 'StorageServices', 'AvatarServices', function($scope, $state, StorageServices, AvatarServices) {
        $scope.saveData = function(manufacturer, model, color, plate, image) {
            StorageServices.saveToDB(manufacturer, model, color, plate);
            //alert($localStorage.cars);
            $state.go('app.cars');
        };

        $scope.chooseImage = function() {
          $state.go('app.avatars')
        };

        $scope.image = AvatarServices.getDefaultAvatar();
    }])

    .controller("AvatarsCtrl", ["$scope", "AvatarServices", function($scope, AvatarServices) {
        $scope.avatars = AvatarServices.getAvatars();

        $scope.setAvatar = function(image) {
            //TODO
        }
    }])

    .controller('AboutCtrl', [ '$scope', function($scope) {

    }]);
