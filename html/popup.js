var app = angular.module('spoiless', []);
angular.module('demo', [])

app.controller('MainCtrl',['$scope',
  function($scope){
    $scope.showList = [{"seriesid":1,"seriesName":'GOT'},
    {"seriesid":2,"seriesName":'FAB'},
    {"seriesid":3,"seriesName":'TRU'}];
    //Need to access this list via a REST API call
    $scope.selectedItem = $scope.showList[0].series;
    //$scope.selectedShows = ["ASS","LUG"];
    $scope.selectedShows = [{"seriesid":1,"seriesName":'GOT'}];
    //Need to access this list via a REST API call
    $scope.test = "test";
  }]
);
app.controller('MainCtrl', function($scope, $http) {
    $http.get('localhost:5000/getShows').
        then(function(response) {
            //alert("test");
            $scope.showList = response.data.Shows;
            //alert(response.shows);
            console.log(response.data.Shows);
        });
});
/*
app.controller('getAllShows', function($scope, $http) {
    $http.get('http://0.0.0.0:8080/getShows').
        then(function(response) {
            $scope.showList = response.Shows;
        });
});*/

//input: none
//output: JSON list of all {showid's and shownames}
function getAllShows(){

}

//input seriesid
//output success or failure
function addShow(){

}
function removeShow(){

}
function hideShow(){

}
function showShow(){

}
