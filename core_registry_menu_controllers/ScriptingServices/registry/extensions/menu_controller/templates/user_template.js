/*globals angular menuControllers*/
/*eslint-env browser */

menuControllers.controller('UserCtrl', ['$scope', '$http',
	function($scope, $http) {
		$scope.name = "Unknown";
		$http.get('../../op?user').success(function(data) {
			$scope.name = data;
		});
	}
]);
