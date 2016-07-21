/*globals angular menuControllers*/
/*eslint-env browser */

menuControllers.controller('MenuCtrl', ['$scope', '$http',
	function($scope, $http) {
		$http.get('menu.json').success(function(data) {
			$scope.menus = data;
		});
	}
]);
