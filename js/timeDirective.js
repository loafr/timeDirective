angular.module('timeApp').directive('showTime', function() {
	return {
		restrict: 'E',
    	templateUrl: '/js/homeTemplate.html',
    	link: function($scope, $elem, $attr){
      		var d = (new Date()+'').split(' ');
      		var friendlyTime =  d[4];
      		var date = [d[1], d[2]].join(' ') + ", " + d[3]
      		setInterval(d, 500);
      		$scope.time = friendlyTime;
      		$scope.date = date;		
    	}
  	}
});

app.directive('clock', ['dateFilter', '$timeout', function(dateFilter, $timeout){
    return {
        restrict: 'E',
        scope: {
            format: '@'
        },
        link: function($scope, $elem, $attr){
            var updateTime = function(){
                var now = Date.now();
                $elem.html(dateFilter(now, $scope.format));
                $timeout(updateTime, now % 250);
            };
            updateTime();
        }
    };
}]);