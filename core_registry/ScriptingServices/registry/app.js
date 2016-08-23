/* globals $ */
/* eslint-env node, dirigible */

var response = require("net/http/response");

var fileUtils = require("registry/utils/fileUtils");
var routesExtensions = require("registry/extensions/routesExtensions.js");

var homeControllerExtensions = require("registry/extensions/homeControllerExtensions.js");
var commonControllerExtensions = require("registry/extensions/commonControllerExtensions.js");
var menuControllerExtensions = require("registry/extensions/menuControllerExtensions.js");
var navMenuControllerExtensions = require("registry/extensions/navMenuControllerExtensions.js");

var content = fileUtils.getContent("/db/dirigible/registry/public/ScriptingServices/registry/templates/app.js");
content += fileUtils.getContent("/db/dirigible/registry/public/ScriptingServices/registry/templates/app_config_start.js");
content += routesExtensions.getRoutes();
content += fileUtils.getContent("/db/dirigible/registry/public/ScriptingServices/registry/templates/app_config_end.js");
content += commonControllerExtensions.getControllers();
content += menuControllerExtensions.getControllers();
content += navMenuControllerExtensions.getControllers();
content += homeControllerExtensions.getControllers();

response.setContentType("text/javascript");
response.print(content);
response.flush();
response.close();
