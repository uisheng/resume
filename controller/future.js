myApp.controller("futureCtrl",function($scope, $http){
	$http.get("../js/resume.json")
		.success(function(response){
			$scope.items=response.future;
		})
})