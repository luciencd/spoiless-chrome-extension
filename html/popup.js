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
    $scope.user_id = 1;
    $http.get('http://localhost:5000/getShows').then(function(response) {
            //alert("test");
            //alert("test");
            $scope.showList = response.data.Series;
            //alert(response);

            console.log(response.data.Series);
        }
    );
    /*
    var config = {
     params: {user_id:$scope.user_id},
     headers : {'Accept' : 'application/json'}
    };
   $http.get('http://localhost:5000/getUserSpoilers',config).then(function(response){
      $scope.userSeriesList = response.data.Series;
      console.log(response.data.Series);
    });*/
    getUserSpoilers($scope.user_id,23123);


    $scope.addUserSpoilerCtrl = function(){
      addUserSpoiler($scope.user_id,$scope.selectedItem.series_id,12312321);
      getUserSpoilers($scope.user_id,23123);
      //Edit angularjs to add this series
    }

    $scope.removeUserSpoilerCtrl = function(series_id){
      alert("ass"+series_id);
      console.log(series_id);
      removeUserSpoiler($scope.user_id,series_id,12312321);
      getUserSpoilers($scope.user_id,23123);
      //Edit angularjs to add this series
    }




    function createUser(){
      $http({method: "GET",
            url:"http://localhost:5000/createUser",
          }).then(function(response) {

              //alert("test");
              $scope.showList = response.data.Series;
              //alert(response);

              //console.log(response.data.Series);
              console.log(response);
          }
      );
    }

    //input seriesid
    //output success or failure
    function addUserSpoiler(user_id,series_id,api_key){
      alert("addUserSpoiler function ("+user_id+","+series_id+") ");
      $http({method: "GET",
            url:"http://localhost:5000/addUserSpoiler",
            params:{"user_id":user_id,"series_id":series_id,"api_key":api_key}
          }).then(function(response) {

              alert("addUserSpoiler return");
              alert(response);


              console.log(response.data);
          }
      );
    }
    function removeUserSpoiler(user_id,series_id,api_key){
      $http({method: "GET",
            url:"http://localhost:5000/removeUserSpoiler",
            params:{"user_id":user_id,"series_id":series_id,"api_key":api_key}
          }).then(function(response) {

              alert("removeUserSpoiler return");

              alert(response);

          }
      );
    }

    function hideUserSpoiler(user_id,series_id,api_key){
      $http({method: "GET",
            url:"http://localhost:5000/hideUserSpoiler",
            params:{"user_id":user_id,"series_id":series_id,"api_key":api_key}
          }).then(function(response) {

              alert("hideUserSpoiler return");
              alert(response);


          }
      );
    }
    function showUserSpoiler(user_id,series_id,api_key){
      $http({method: "GET",
            url:"http://localhost:5000/showUserSpoiler",
            params:{"user_id":user_id,"series_id":series_id,"api_key":api_key}
          }).then(function(response) {

              alert("showUserSpoiler return");
              alert(response);


          }
      );
    }
    function getUserSpoilers(user_id,api_key){
      $http({method: "GET",
            url:"http://localhost:5000/getUserSpoilers",
            params:{"user_id":user_id,"api_key":api_key}
          }).then(function(response) {

              alert("getUserSpoiler return");
              alert(response);
              $scope.userSeriesList = response.data.Series;
          }
      );
    }

    //Bind createUser to button

    //Bind addSeries to button.

    //Bind removeSeries to button.

    //Bind showSeries to button.

    //Bind hideSeries to button.

    //Bind getUserSpoilers to button.
});
