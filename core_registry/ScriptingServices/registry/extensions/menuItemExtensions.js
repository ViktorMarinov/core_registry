/* globals $ */
/* eslint-env node, dirigible */

const EXT_POINT_NAME = "/registry/extension_points/menu_item";

const TEMPLATE_START_LOCATION = "/db/dirigible/registry/public/ScriptingServices/registry/templates/controllers/menu_start.js";
const TEMPLATE_END_LOCATION = "/db/dirigible/registry/public/ScriptingServices/registry/templates/controllers/menu_end.js";

var fileUtils = require("registry/utils/fileUtils");
var extensionService = $.getExtensionService();

exports.getControllers = function() {
	var controller = fileUtils.getContent(TEMPLATE_START_LOCATION);
	controller += getContent();
	controller += fileUtils.getContent(TEMPLATE_END_LOCATION);
	return controller;
};

function getContent() {
	var extensions = extensionService.getExtensions(EXT_POINT_NAME);
	var data = [];
	for (var i = 0; i < extensions.length; i++) {
	    var extension = require(extensions[i]);
	    data.push(createItem(extension));
	}
	sort(data);
	return toString(data);
}

function createItem(extension) {
	var item = {
    	"item": "$scope.menus.push(" + extension.getItem() + ");\n",
    	"order": extension.getOrder()
    };
    return item;
}

function sort(data) {
	data.sort(function(a, b) {
		return a.order - b.order;
	});
}

function toString(data) {
	var content = "";
	for(var i = 0; i < data.length; i ++) {
		content += data[i].item;
	}
	return content;
}
