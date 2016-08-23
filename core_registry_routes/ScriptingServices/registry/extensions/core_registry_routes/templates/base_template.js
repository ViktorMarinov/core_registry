	.when('/workspace', {
      controller: 'WorkspaceCtrl',
      templateUrl: 'templates/workspace/workspace.html'
    })
    
    .when('/content', {
        controller: 'ContentCtrl',
        templateUrl: 'templates/content/content.html'
    }).when('/content/import', {
      controller: 'ImportCtrl',
      templateUrl: 'templates/content/import/import.html'
    }).when('/content/clone', {
      controller: 'CloneCtrl',
      templateUrl: 'templates/content/import/import.html'
    }).when('/content/project', {
      controller: 'ProjectCtrl',
      templateUrl: 'templates/content/import/import.html'
    })
    
    .when('/web/content', {
      controller: 'WebContentCtrl',
      templateUrl: 'templates/web/content/content.html'
    }).when('/web/wiki', {
      controller: 'WebWikiCtrl',
      templateUrl: 'templates/web/wiki/wiki.html'
    })
    
    .when('/mobile', {
        controller: 'MobileCtrl',
        templateUrl: 'templates/mobile/mobile.html'
    })
    
    .when('/scripting/javascript', {
      controller: 'JavaScriptCtrl',
      templateUrl: 'templates/scripting/javascript/javascript.html'
    }).when('/scripting/command', {
      controller: 'CommandCtrl',
      templateUrl: 'templates/scripting/command/command.html'
    }).when('/scripting/sql', {
        controller: 'SQLCtrl',
        templateUrl: 'templates/scripting/sql/sql.html'
    }).when('/scripting/tests', {
      controller: 'TestsCtrl',
      templateUrl: 'templates/scripting/tests/tests.html'
    })
    
    .when('/integration/flow', {
      controller: 'FlowCtrl',
      templateUrl: 'templates/integration/flows/flows.html'
    }).when('/integration/job', {
      controller: 'JobCtrl',
      templateUrl: 'templates/integration/jobs/jobs.html'
    }).when('/integration/listener', {
        controller: 'ListenerCtrl',
        templateUrl: 'templates/integration/listeners/listeners.html'
    })
