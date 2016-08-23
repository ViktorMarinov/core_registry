/* globals $ */
/* eslint-env node, dirigible */

var fileUtils = require("registry/utils/fileUtils");

exports.getControllers = function() {
	var controllers = fileUtils.getContent("/db/dirigible/registry/public/ScriptingServices/registry/templates/menu_controller/base_template.js");
	var extensionService = $.getExtensionService();

	var extensions = extensionService.getExtensions("/registry/extension_points/menu_controller");
	for (var i=0; i < extensions.length; i++) {
	    var extension = require(extensions[i]);
	    controllers += extension.getController() + "\n";
	}
	return controllers;
};
