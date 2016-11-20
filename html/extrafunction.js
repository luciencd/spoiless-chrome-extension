
function createUser(){
  $http({method: "GET",
        url:"localhost:5000/createUser",
      }).then(function(response) {

          alert("test");
          $scope.showList = response.data.Series;
          alert(response);

          console.log(response.data.Series);
      }
  );
}

//input seriesid
//output success or failure
function addSeries(user_id,series_id){
  $http({method: "GET",
        url:"localhost:5000/addSeries",
        data:{"user_id":user_id,"series_id":series_id}
      }).then(function(response) {

          alert("test");
          $scope.showList = response.data.Series;
          alert(response);

          console.log(response.data.Series);
      }
  );
}
function removeSeries(user_id,series_id){
  $http({method: "GET",
        url:"localhost:5000/removeSeries",
        data:{"user_id":user_id,"series_id":series_id}
      }).then(function(response) {

          alert("test");
          $scope.showList = response.data.Series;
          alert(response);

          console.log(response.data.Series);
      }
  );
}

function hideSeries(user_id,series_id){
  $http({method: "GET",
        url:"localhost:5000/hideSeries",
        data:{"user_id":user_id,"series_id":series_id}
      }).then(function(response) {

          alert("test");
          $scope.showList = response.data.Series;
          alert(response);

          console.log(response.data.Series);
      }
  );
}
function showSeries(user_id,series_id){
  $http({method: "GET",
        url:"localhost:5000/showSeries",
        data:{"user_id":user_id,"series_id":series_id}
      }).then(function(response) {

          alert("test");
          $scope.showList = response.data.Series;
          alert(response);

          console.log(response.data.Series);
      }
  );
}
function getUserSpoilers(user_id){
  $http({method: "GET",
        url:"localhost:5000/getUserSpoilers",
        data:{"user_id":user_id}
      }).then(function(response) {

          alert("test");
          $scope.showList = response.data.Series;
          alert(response);

          console.log(response.data.Series);
      }
  );
}
