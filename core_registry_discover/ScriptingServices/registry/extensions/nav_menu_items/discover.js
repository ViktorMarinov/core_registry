/*eslint-env node */

exports.getItem = function() {
	var fileUtils = require("registry/utils/fileUtils");
	return fileUtils.getContent("/db/dirigible/registry/public/ScriptingServices/registry/extensions/nav_menu_items/templates/discover_template.js");
};
