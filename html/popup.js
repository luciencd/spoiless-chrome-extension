var app = angular.module('spoiless', []);

app.controller('MainCtrl',
['$scope',
  function($scope){
    $scope.showList = [{"seriesid":1,"seriesName":'GOT'},
    {"seriesid":2,"seriesName":'FAB'},
    {"seriesid":3,"seriesName":'TRU'}];
    $scope.selectedItem = $scope.showList[0].series;

    //$scope.selectedShows = ["ASS","LUG"];
    $scope.selectedShows = [{"seriesid":1,"seriesName":'GOT'}];

    $scope.test = "test";
  }
]);
