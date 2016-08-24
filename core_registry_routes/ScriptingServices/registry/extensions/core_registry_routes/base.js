/*eslint-env node */

exports.getRoutes = function() {
	var routes = [{
		'location': '/workspace',
		'controller': 'WorkspaceCtrl',
		'templateUrl': 'templates/workspace/workspace.html'
	}, {
		'location': '/content',
		'controller': 'ContentCtrl',
		'templateUrl': 'templates/content/content.html'
	}, {
		'location': '/content/import',
		'controller': 'ImportCtrl',
		'templateUrl': 'templates/content/import/import.html'
	}, {
		'location': '/content/clone',
		'controller': 'CloneCtrl',
		'templateUrl': 'templates/content/import/import.html'
	}, {
		'location': '/content/project',
		'controller': 'ProjectCtrl',
		'templateUrl': 'templates/content/import/import.html'
	}, {
		'location': '/web/content',
		'controller': 'WebContentCtrl',
		'templateUrl': 'templates/web/content/content.html'
	}, {
		'location': '/web/wiki',
		'controller': 'WebContentCtrl',
		'templateUrl': 'templates/web/wiki/wiki.html'
	}, {
		'location': '/mobile',
		'controller': 'MobileCtrl',
		'templateUrl': 'templates/mobile/mobile.html'
	}, {
		'location': '/scripting/javascript',
		'controller': 'JavaScriptCtrl',
		'templateUrl': 'templates/scripting/javascript/javascript.html'
	}, {
		'location': '/scripting/command',
		'controller': 'CommandCtrl',
		'templateUrl': 'templates/scripting/command/command.html'
	}, {
		'location': '/scripting/sql',
		'controller': 'SQLCtrl',
		'templateUrl': 'templates/scripting/sql/sql.html'
	}, {
		'location': '/scripting/tests',
		'controller': 'TestsCtrl',
		'templateUrl': 'templates/scripting/tests/tests.html'
	}, {
		'location': '/integration/flow',
		'controller': 'FlowCtrl',
		'templateUrl': 'templates/integration/flows/flows.html'
	}, {
		'location': '/integration/job',
		'controller': 'JobCtrl',
		'templateUrl': 'templates/integration/jobs/jobs.html'
	}, {
		'location': '/integration/listener',
		'controller': 'ListenerCtrl',
		'templateUrl': 'templates/integration/listeners/listeners.html'
	}, {
		'location': '/integration/listener',
		'controller': 'ListenerCtrl',
		'templateUrl': 'templates/integration/listeners/listeners.html'
	}];
	return routes;
};
