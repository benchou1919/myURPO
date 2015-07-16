angular.module('urpoAPP', ['ngSanitize', 'ngCsv']).controller('searchController', function($scope) {
	

    $scope.Data = GET_PROJECTLIST();
    $scope.OriginalData = GET_PROJECTLIST();
    for (var i = 0; i < $scope.Data.length; i ++) {
        $scope.Data[i].select = false;
    }

    $scope.myHide = function (index) {
        var len = $scope.getHeader1().length;
        if(index == len ) {
            return true;
        } else {
            return false;
        }
    }

    $scope.selectAll = function() {
    	for (var i = 0; i < $scope.Data.length; i++) {
    		if ($scope.Data[i].select == 0) console.log((i+1) + " change to true");
    		$scope.Data[i].select = true;
    	}
    }

    $scope.unselectAll = function() {
    	for (var i = 0; i < $scope.Data.length; i++) {
    		if ($scope.Data[i].select == 1) console.log((i+1) + " change to false");
    		$scope.Data[i].select = false;
    	}
    }

    

    $scope.select1 = function(x) {
        
        console.log(x.Project_Name);
        for (var i = 0; i < $scope.Data.length; i ++) {
            if ($scope.Data[i].Project_Name == x.Project_Name) {
                $scope.Data[i].select = true;
                break;
            }
        }
    }

    

    $scope.unselect1 = function(x) {
        
        for (var i = 0; i < $scope.Data.length; i ++) {
            if ($scope.Data[i].Project_Name == x.Project_Name) {
                $scope.Data[i].select = false;
                break;
            }
        }
        

    }

    

    $scope.order = "id";
    var list = ["id", "Category", "Dept", "Project_Name", "Estimated_Start_Date", "Estimated_End_Date", "Region", "Institution", "Project_Agreement_Status", "Project_Owners", "Principal_Investigators"];
    var glyphicon_status = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    $scope.sort = function(index) {
        console.log('sort');
        for (var i = 0; i < glyphicon_status.length; i ++) {
            glyphicon_status[i] = 0;
        }
        if($scope.order == list[index]) {
            glyphicon_status[index] = 1;
            $scope.order = "-" + $scope.order;
        } else {
            glyphicon_status[index] = 0;
            $scope.order = list[index]; 
        }

    };

    $scope.glyphicon_hide = function(index) {
        return glyphicon_status[index];
    }
    

    $scope.getHeader = function() {
        return Object.keys($scope.OriginalData[0]);
    }

    $scope.getHeader1 = function() {
        return ["id", "Category", "Department", "Project Name", "Start Date", "End Date", "Region", "Institution", "Project Agreement Status", "Project Owners", "Principal Investigators"];
        //return Object.keys($scope.OriginalData[0]);
    }

    $scope.header = $scope.getHeader();
    $scope.header1 = $scope.getHeader1();


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

    $scope.getData1 = function() {
        var data = [];
        var tmp = $scope.Data;
        for (var i = 0; i < tmp.length; i ++) {
            
            if(tmp[i].select == true) {
                data.push($scope.OriginalData[i]);    
            }
        }

        return data;
    }

    $scope.getOwner = function(obj) {
        var a = [];
        for(var i = 0; i < obj.length; i ++) {
            a.push(obj[i].Name);
        }
        return a;
    }

     $scope.getInvestigator = $scope.getOwner;

});