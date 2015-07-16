angular.module('urpoAPP', ['ngSanitize', 'ngCsv']).controller('searchController', function($scope) {
	$scope.objects = [
        {select: false, state:'1', name:'beach', area: 'Taiwan', school: 'NTU', PM: 'Brian', start: '7/3', end: '8/8'},
        {select: true, state:'3', name:'Muffin', area: 'Taiwan', school: 'NTU', PM: 'Brian', start: '7/3', end: '8/8'},
        {select: true, state:'7', name:'big ben', area: 'Taiwan', school: 'NCKU', PM: 'Brian', start: '7/3', end: '8/8'},
        {select: true, state:'1', name:'Zebra', area: 'USA', school: 'UCLA', PM: 'Brian.H', start: '7/3', end: '8/8'},
        {select: false, state:'3', name:'flower2', area: 'Taiwan', school: 'NTU', PM: 'Brian', start: '7/3', end: '8/8'},
        {select: true, state:'5', name:'WaterColor', area: 'Taiwan', school: 'NCTU', PM: 'Ken', start: '7/7', end: '8/8'},
        {select: true, state:'1', name:'forest2', area: 'Japan', school: 'Tokyo', PM: 'Brian', start: '7/3', end: '8/8'},
        {select: true, state:'4', name:'love_heart', area: 'Taiwan', school: 'NTU', PM: 'Brian', start: '7/3', end: '8/8'},
        {select: true, state:'2', name:'ico', area: 'Taiwan', school: 'NCCU', PM: 'Brian', start: '7/3', end: '8/8'},
        {select: true, state:'1', name:'bootstrap', area: 'China', school: 'NTHU', PM: 'Brian', start: '7/3', end: '8/8'}
    ];



    $scope.selectAll = function() {
    	for (var i = 0; i < $scope.objects.length; i++) {
    		if ($scope.objects[i].select == 0) console.log((i+1) + " change to true");
    		$scope.objects[i].select = true;
    	}
    }
    $scope.unselectAll = function() {
    	for (var i = 0; i < $scope.objects.length; i++) {
    		if ($scope.objects[i].select == 1) console.log((i+1) + " change to false");
    		$scope.objects[i].select = false;
    	}
    }

    $scope.select = function(x) {
    	
        console.log(x.name);
        for (var i = 0; i < $scope.objects.length; i ++) {
            if ($scope.objects[i].name == x.name) {
                $scope.objects[i].select = true;
                break;
            }
        }
    }
    $scope.unselect = function(x) {
    	
        for (var i = 0; i < $scope.objects.length; i ++) {
            if ($scope.objects[i].name == x.name) {
                $scope.objects[i].select = false;
                break;
            }
        }
    	

    }

    /**
     * Will there be more headers?
     */
     

    $scope.order = "state";

    $scope.sort = function(index) {
        console.log('sort');
        if(index == 0) {
            $scope.order = "state";
        } else if (index == 1) {
            $scope.order = "name";
        } else if (index == 2) {
            $scope.order = "area";
        } else if (index == 3) {
            $scope.order = "school";
        } else if (index == 4) {
            $scope.order = "PM";
        } else if (index == 5) {
            $scope.order = "start";
        } else if (index == 6) {
            $scope.order = "end";
        }
    };

    $scope.getHeader = function() {
        return ["狀態", "專案名稱", "區域", "學校", "負責人", "開始時間", "結束時間"];
    }

    $scope.header = $scope.getHeader();

    $scope.getData = function() {
        var data = [];
        var tmp = $scope.objects;
        for(var i = 0; i < tmp.length; i ++) {
            if(tmp[i].select == true) {
                data.push({a: tmp[i].state, b: tmp[i].name, c: tmp[i].area, d: tmp[i].school, e: tmp[i].PM, f: tmp[i].start, g: tmp[i].end});    
            }
        }
        return data;
    }




});