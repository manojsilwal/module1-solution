var app = angular.module("MyApp",[]);

app.controller("Controller",DIController);

DIController.$injector = ['$scope'];

function DIController($scope){
	$scope.message = " ";
	$scope.input = "";
	$scope.checkInput = function(){
		if($scope.input == ""){
			$scope.message = "please enter the data";
		}

		else{
			var len = $scope.arraySize($scope.input);
			if(len > 3){
				$scope.message = "Too Much!"
			}
			else{
				$scope.message = "Enjoy!";
			}
		}
	}

	$scope.arraySize = function(input){
		var array = input.split(',');
		console.log(array);
		return array.length;
	};
};
