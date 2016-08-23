/*eslint-env node */

exports.getRoutes = function() {
	var fileUtils = require("registry/utils/fileUtils");
	return fileUtils.getContent("/db/dirigible/registry/public/ScriptingServices/registry/extensions/core_registry_routes/templates/develop_template.js");
};
