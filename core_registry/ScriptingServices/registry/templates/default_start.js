/*globals angular */
/*eslint-env browser */
var defaultServices = angular.module('defaultServices', ['ngResource']);

defaultServices.factory('FilesSearch', ['$resource',
  function($resource) {
    return $resource('../search');
  }
]);

var controllers = angular.module('defaultControllers', []);
controllers.controller('DefaultListCtrl', ['$scope', '$sce', 'FilesSearch',

  function($scope, $sce, FilesSearch) {
    /*    if (!$routeParams.pathName) {
      $routeParams.pathName = 'content';
    }*/
    var backupRoot;
    var timeOutDelay;

    $scope.caseSensitive = false;
    $scope.mainError = undefined;
    $scope.searchError = undefined;
    $scope.search = undefined;

    if ($scope.objectContent) {
      $scope.restService.get({}, function(data) {
        $scope.mainError = undefined;
        backupRoot = $scope.selected = data;
        $scope.paths = [data];
      }, onError);
    } else {
      $scope.restService.query({}, onArrayQuery, onError);
    }

    $scope.change = function(newData) {
      if (!newData.folder) {
        $scope.iframeSrc = newData.path;
      } else if (newData.files) {
        $scope.selected = newData;
        $scope.paths.push(newData);
      }
    };

    $scope.copyFile = function(file) {
      window.prompt("Copy to clipboard: Ctrl+C, Enter", file.path);
    };

    $scope.crumbsChanged = function(path) {
      var inx = this.paths.indexOf(path);
      $scope.paths.splice(inx + 1);
      $scope.selected = this.paths[inx];
    };

    $scope.securedUrl = function(src) {
      return $sce.trustAsResourceUrl(src);
    };

    $scope.$watch('search', function(newVal, oldVal) {
      if (!oldVal) {
        return;
      }
      if (!newVal) {
        $scope.searchError = undefined;
        $scope.selected = backupRoot;
        return;
      }
      clearTimeout(timeOutDelay);
      timeOutDelay = setTimeout(function() {
        FilesSearch.query({
          q: newVal
        }, onArrayQuery, function(er) {
          $scope.searchError = er;
        });
      }, 300);
    });

    function onArrayQuery(data) {
      $scope.searchError = undefined;
      $scope.paths = undefined;
      $scope.selected = {
        files: data
      };
    }

    function onError(er) {
      $scope.mainError = er;
    }
  }
]);

// --- Discover Controllers ---
controllers.controller('ContentCtrl', function($scope, $resource) {
  $scope.objectContent = true;
  $scope.restService = $resource('../../content');
});

controllers.controller('WebContentCtrl', function($scope, $resource) {
	  $scope.objectContent = true;
	  $scope.restService = $resource('../../web');
});

controllers.controller('WebWikiCtrl', function($scope, $resource) {
	  $scope.objectContent = true;
	  $scope.restService = $resource('../../wiki');
});

controllers.controller('MobileCtrl', function($scope, $resource) {
	  $scope.objectContent = true;
	  $scope.restService = $resource('../../mobile');
});

controllers.controller('JavaScriptCtrl', function($scope, $resource) {
  $scope.restService = $resource('../../scripting/javascript');
});

controllers.controller('SQLCtrl', function($scope, $resource) {
	$scope.restService = $resource('../../scripting/sql');
});

controllers.controller('CommandCtrl', function($scope, $resource) {
	$scope.restService = $resource('../../scripting/command');
});

controllers.controller('TestsCtrl', function($scope, $resource) {
  $scope.restService = $resource('../../scripting/tests');
});

controllers.controller('FlowCtrl', function($scope, $resource) {
  $scope.restService = $resource('../../flow/flow');
});

controllers.controller('JobCtrl', function($scope, $resource) {
  $scope.restService = $resource('../../flow/job');
});

controllers.controller('ListenerCtrl', function($scope, $resource) {
  $scope.restService = $resource('../../flow/listener');
});
// ------

controllers.controller('MonitoringAccessCtrl', function($scope, $resource) {
	$resource('../../acclog').query({}, function(data) {
		$scope.logs = data;
	});
});
