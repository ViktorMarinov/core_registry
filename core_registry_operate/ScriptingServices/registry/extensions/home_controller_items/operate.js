/*eslint-env node */

exports.getItem = function() {
	var fileUtils = require("registry/utils/fileUtils");
	return fileUtils.getContent("/db/dirigible/registry/public/ScriptingServices/registry/extensions/home_controller_items/templates/operate_template.js");
};
