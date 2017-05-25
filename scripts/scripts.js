// Create angular object's module("name of the module", dependencies for
// module); empty array for no dependencies.
var myApp = angular.module("myModule", []);

// Creates controller (javascript function) to build a model for the view to
// display ($scope) is an angular object passed to to the controller function by
// the angular framework automatically we attach the model to this scope object
// which will be available in the view within the view we use the data binding
// expression to retrieve the data from the scope object and display it. Here we
// are registering the the controller function with the module.
myApp.controller("myController", function ($scope) {
    var employee = {
        firstName: "David",
        lastName: "Hastings",
        gender: "male"
    };

    $scope.employee = employee;

});