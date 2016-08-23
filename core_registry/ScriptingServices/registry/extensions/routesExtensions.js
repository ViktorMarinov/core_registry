/* globals $ */
/* eslint-env node, dirigible */

var fileUtils = require("registry/utils/fileUtils");

exports.getRoutes = function() {
	var extensionService = $.getExtensionService();

	var extensions = extensionService.getExtensions("/registry/extension_points/routes");
	var routes = fileUtils.getContent("/db/dirigible/registry/public/ScriptingServices/registry/templates/routes_start.js");

	for (var i=0; i < extensions.length; i++) {
	    var extension = require(extensions[i]);
	    routes += extension.getRoutes() + "\n";
	}
	
	routes += fileUtils.getContent("/db/dirigible/registry/public/ScriptingServices/registry/templates/routes_end.js");
	return routes;
};
