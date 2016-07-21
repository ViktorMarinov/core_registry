/*globals angular menuControllers*/
/*eslint-env browser */

menuControllers.controller('HomeCtrl', ['$scope',
	function($scope) {
		$scope.homeData = [{
			image: 'edit',
			color: 'blue',
			path: '#/develop',
			title: 'Develop',
			description: "Development Toolkits",
			newTab: true
		}, {
			image: "search",
			color: 'green',
			path: "#/discover",
			title: "Discover",
			description: "Service Endpoints"
		}, {
			image: "wrench",
			color: 'orange',
			path: "#/operate",
			title: "Operate",
			description: "Lifecycle Management"
		}, {
			image: "area-chart",
			color: 'red',
			path: "#/monitoring",
			title: "Monitor",
			description: "Basic Metrics"
		}];
	}
]);
