/* globals $ */
/* eslint-env node, dirigible */

var response = require("net/http/response");

var fileUtils = require("registry/utils/fileUtils");
var defaultControllerExtensions = require("registry/extensions/defaultControllerExtensions.js");

var content = fileUtils.getContent("/db/dirigible/registry/public/ScriptingServices/registry/templates/default.js");
content += defaultControllerExtensions.getControllers();

response.setContentType("text/javascript");
response.print(content);
response.flush();
response.close();
