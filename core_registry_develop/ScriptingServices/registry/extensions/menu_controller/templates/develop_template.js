/*globals angular menuControllers*/
/*eslint-env browser */

menuControllers.controller('DevelopCtrl', ['$scope',
	function($scope) {
		$scope.developData = [{
			image: 'laptop',
			color: 'blue',
			path: '../../index.html',
			title: 'Web IDE',
			description: "Development Toolkit",
			newTab: true
		}, {
			image: "mobile",
			color: 'lblue',
			path: "#/workspace",
			title: "Light IDE",
			description: "Lightweight Development"
		}, {
			image: "desktop",
			color: 'lila',
			path: "http://download.eclipse.org/dirigible/drops/M20160119-1919/p2/rcp/",
			title: "Desktop IDE",
			description: "Eclipse Plugins"
		}];
	}
]);

