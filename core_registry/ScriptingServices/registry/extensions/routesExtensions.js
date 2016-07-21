/* globals $ */
/* eslint-env node, dirigible */

exports.getRoutes = function() {
	var controllers = "";
	var extensionService = $.getExtensionService();

	var extensions = extensionService.getExtensions("/registry/extension_points/routes");
	for (var i=0; i < extensions.length; i++) {
	    var extension = require(extensions[i]);
	    controllers += extension.getRoutes() + "\n";
	}
	return controllers;
};
