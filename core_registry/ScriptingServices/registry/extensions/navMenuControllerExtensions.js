/* globals $ */
/* eslint-env node, dirigible */

exports.getControllers = function() {
	var fileUtils = require("registry/utils/fileUtils");
	var controller = fileUtils.getContent("/db/dirigible/registry/public/ScriptingServices/registry/templates/menu_controller/nav_menu_template_start.js");
	
	var extensionService = $.getExtensionService();

	var extensions = extensionService.getExtensions("/registry/extension_points/nav_menu_items");
	for (var i=0; i < extensions.length; i++) {
	    var extension = require(extensions[i]);
	    controller += extension.getItem() + "\n";
	}
	controller += fileUtils.getContent("/db/dirigible/registry/public/ScriptingServices/registry/templates/menu_controller/nav_menu_template_end.js");
	return controller;
};
