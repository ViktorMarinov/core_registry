/* globals $ */
/* eslint-env node, dirigible */

var response = require("net/http/response");

var fileUtils = require("registry/utils/fileUtils");

var content = fileUtils.getContent("/db/dirigible/registry/public/ScriptingServices/registry/templates/default_start.js");
content += fileUtils.getContent("/db/dirigible/registry/public/ScriptingServices/registry/templates/default_end.js");

response.setContentType("text/javascript");
response.print(content);
response.flush();
response.close();
