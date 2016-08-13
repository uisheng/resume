myApp.controller("connectCtrl",function($scope,$http){
	$http.get("../js/resume.json")
		.success(function(response){
			$scope.items=response.connect;
		})
})