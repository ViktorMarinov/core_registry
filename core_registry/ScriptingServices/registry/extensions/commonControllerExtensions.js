/* globals $ */
/* eslint-env node, dirigible */

exports.getControllers = function() {
	var controllers = "";
	var extensionService = $.getExtensionService();

	var extensions = extensionService.getExtensions("/registry/extension_points/common_controller");
	for (var i=0; i < extensions.length; i++) {
	    var extension = require(extensions[i]);
	    controllers += extension.getController() + "\n";
	}
	return controllers;
};
