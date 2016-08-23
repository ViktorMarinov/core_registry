/* globals $ */
/* eslint-env node, dirigible */

var fileUtils = require("registry/utils/fileUtils");

exports.getControllers = function() {
	var controller = fileUtils.getContent("/db/dirigible/registry/public/ScriptingServices/registry/templates/menu_controller/home_template_start.js");
	
	var extensionService = $.getExtensionService();

	var extensions = extensionService.getExtensions("/registry/extension_points/home_controller_items");
	for (var i=0; i < extensions.length; i++) {
	    var extension = require(extensions[i]);
	    controller += extension.getItem() + "\n";
	}
	controller += fileUtils.getContent("/db/dirigible/registry/public/ScriptingServices/registry/templates/menu_controller/home_template_end.js");
	return controller;
};
