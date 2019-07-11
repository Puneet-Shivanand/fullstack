//(function(){
//'use strict';
//angular.module('DIApp',[])
//.controller('DIController', ['$scope', '$filter',DIController]);

//function DIController($scope, $filter) {
//	$scope.name='Puneet';

//	$scope.upper = function(){
//		var upCase = $filter('uppercase');
//		$scope.name = upCase($scope.name);
//	};
//}

//})();

!function(){"use strict";angular.module("DIApp",[]).controller("DIController",["$scope","$filter",function(e,n){e.name="Puneet",e.upper=function(){var r=n("uppercase");e.name=r(e.name)}}])}();
