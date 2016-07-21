/*globals menuControllers */
/*eslint-env browser */

menuControllers.controller('DiscoverCtrl', ['$scope',
	function($scope) {
		$scope.discoverData = [{
			image: "search",
			color: 'green',
			path: "#/content",
			title: "Registry",
			description: "Browse Registry Content"
		}, {
			image: "globe",
			color: 'yellow',
			path: "#/web/content",
			title: "Web",
			description: "Browse User Interfaces"
		}, {
			image: "book",
			color: 'yellow',
			path: "#/web/wiki",
			title: "Wiki",
			description: "Browse Documentation"
		}, {
			image: "mobile-phone",
			color: 'blue',
			path: "#/mobile",
			title: "Mobile",
			description: "Native Mobile Apps"
		}, {
			image: "file-code-o",
			color: 'lblue',
			path: "#/scripting/javascript",
			title: "JavaScript",
			description: "JavaScript Services"
		}, {
			image: "database",
			color: 'lblue',
			path: "#/scripting/sql",
			title: "SQL",
			description: "SQL Services"
		}, {
			image: "gear",
			color: 'lblue',
			path: "#/scripting/command",
			title: "Command",
			description: "Command Services"
		}, {
			image: "caret-square-o-right",
			color: 'orange',
			path: "#/integration/flow",
			title: "Flows",
			description: "Integration Flows"
		}];
	}
]);

