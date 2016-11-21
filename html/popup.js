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
    $scope.userSeriesList = [];
    $scope.getUserSpoilersCtrl = function(user_id){
      $scope.userSeriesList = getUserSpoilers(user_id,23123);
    }

    //Fix this one to be more like the others.
    $scope.addUserSpoilerCtrl = function(user_id){
      addUserSpoiler($scope.user_id,$scope.selectedItem.series_id,12312321);
      //alert("userlist"+$scope.userSeriesList);
      console.log($scope.userSeriesList);
      $scope.userSeriesList = $scope.userSeriesList.concat([{"series_id":$scope.selectedItem.series_id,"seriesName":$scope.selectedItem.seriesName}]);
      console.log($scope.userSeriesList);
      //alert("userlist"+$scope.userSeriesList);
      //getUserSpoilersCtrl($scope.user_id);
      //Edit angularjs to add this series
    }

    $scope.removeUserSpoilerCtrl = function(series_id,user_id){
      //alert("ass"+series_id);
      console.log(series_id);
      removeUserSpoiler(user_id,series_id,12312321);
      getUserSpoilers(user_id,23123);
      //Edit angularjs to add this series
    }

    //plain_text
    $scope.checkSpoilerText = function(){
      plain_text = "Game of thrones whisper whisper whisper....";
      alert("checking plain text: '"+plain_text+"' for spoilers.");

    }

    //reddit_comment
    $scope.checkSpoilerRedditComment = function(){
      reddit_comment = "<comment><id>1122</id><upvotes>-12</upvotes><text>Someone dies!</text></comment>";
      alert("checking reddit comment: '"+reddit_comment+"' for spoilers.");

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
      //alert("addUserSpoiler function ("+user_id+","+series_id+") ");
      $http({method: "GET",
            url:"http://localhost:5000/addUserSpoiler",
            params:{"user_id":user_id,"series_id":series_id,"api_key":api_key}
          }).then(function(response) {

              //alert("addUserSpoiler return");
              //alert(response);


              console.log(response.data);
          }
      );
    }
    function removeUserSpoiler(user_id,series_id,api_key){
      $http({method: "GET",
            url:"http://localhost:5000/removeUserSpoiler",
            params:{"user_id":user_id,"series_id":series_id,"api_key":api_key}
          }).then(function(response) {

              //alert("removeUserSpoiler return");

              //alert(response);
              console.log(response.data);

          }
      );
    }

    function hideUserSpoiler(user_id,series_id,api_key){
      $http({method: "GET",
            url:"http://localhost:5000/hideUserSpoiler",
            params:{"user_id":user_id,"series_id":series_id,"api_key":api_key}
          }).then(function(response) {

              console.log(response.data);


          }
      );
    }
    function showUserSpoiler(user_id,series_id,api_key){
      $http({method: "GET",
            url:"http://localhost:5000/showUserSpoiler",
            params:{"user_id":user_id,"series_id":series_id,"api_key":api_key}
          }).then(function(response) {

              console.log(response.data);


          }
      );
    }
    function getUserSpoilers(user_id,api_key){
      $http({method: "GET",
            url:"http://localhost:5000/getUserSpoilers",
            params:{"user_id":user_id,"api_key":api_key}
          }).then(function(response) {



              console.log(response.data);
              return response.data.Series;
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
