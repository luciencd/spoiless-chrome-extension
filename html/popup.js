var app = angular.module('spoiless', []);
angular.module('demo', [])

app.controller('MainCtrl',['$scope',
  function($scope){
    $scope.showList = [];
    //Need to access this list via a REST API call


  }]
);
app.controller('MainCtrl', function($scope, $http) {
    //Bind action to controller.
    $http.get('http://localhost:5000/getShows').then(function(response) {
            //alert("test");
            alert("test");
            $scope.showList = response.data.Series;
            alert(response);

            console.log(response.data.Series);
        }
    );
    //Bind createUser to button

    //Bind addSeries to button.

    //Bind removeSeries to button.

    //Bind showSeries to button.

    //Bind hideSeries to button.

    //Bind getUserSpoilers to button.
});
