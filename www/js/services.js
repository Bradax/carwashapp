angular.module('starter.services', [])

    .factory("StorageServices", ["$localStorage", function($localStorage) {
        var data = [];
        $localStorage.cars = [];
        return {
            saveToDB : function(manufacturer, model, color, plate, image) {
                data = $localStorage.cars;
                if (data.length === 0 || data.length < 1) {
                    data.push({id: 1, manufacturer: manufacturer, model: model, color: color, plate: plate, image: image, washes: [], free: []});
                } else {
                    for (var a = 0; a < data.length; a++) {
                        var id = data[a].id;
                    }
                    data.push({id: id+1, manufacturer: manufacturer, model: model, color: color, plate: plate, image: image, washes: [], free: []});
                    $localStorage.cars = data;
                    data = [];
                }
            },
            loadDB : function() {
                data = $localStorage.cars;
                return data;
            }
        };
    }])

    .factory("WashServices", ["StorageServices", function(StorageServices) {
        return {

        }
    }])

    .factory("AvatarServices", [ function() {
        var avatarList = [
            {image: "img/cars/bicycle.png"},
            {image: "img/cars/hatchback.png"},
            {image: "img/cars/lorry.png"},
            {image: "img/cars/motorcycle.png"},
            {image: "img/cars/sedan.png"},
            {image: "img/cars/sportscar.png"}
        ];
        
        return {
            getAvatars : function() {
                return avatarList;
            },
            getDefaultAvatar: function() {
                return("img/cars/hatchback.png");
            }
        }
    }]);