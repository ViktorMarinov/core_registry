/*eslint-env node */

exports.getController = function() {
	var fileUtils = require("registry/utils/fileUtils");
	return fileUtils.getContent("/db/dirigible/registry/public/ScriptingServices/registry/extensions/menu_controller/templates/user_template.js");
};
