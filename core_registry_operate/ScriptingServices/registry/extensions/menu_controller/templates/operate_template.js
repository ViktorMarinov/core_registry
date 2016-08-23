/*globals menuControllers */
/*eslint-env browser */

menuControllers.controller('OperateCtrl', ['$scope',
	function($scope) {
		$scope.operateData = [{
			image: "truck",
			color: 'blue',
			path: "#/content/import",
			title: "Transport",
			description: "Transport Registry Content"
		}, {
			image: "toggle-on",
			color: 'green',
			path: "#/content/clone",
			title: "Clone",
			description: "Clone Instance"
		}, {
			image: "sign-in",
			color: 'yellow',
			path: "#/content/project",
			title: "Import",
			description: "Import Project"
		}];
	}
]);
