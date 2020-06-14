
myApp.controller('control', function($scope, $rootScope, $location,$http) {
	// create a message to display in our view
	$rootScope.title = "Games";
	
	$scope.picArr=[];
	
	
	console.log("in console");
	$scope.login=function(){
		console.log("in login-->",$scope.user);
		$location.path("/home");


		var res = $http.post('patient/add',$scope.user)
		res.success(function(data, status, headers, config) {
			console.log("add Patient success", data);

			if(data.code==200){
				$location.path("home");
			}
		}), res.error(function(data, status, headers, config) {
			console.log("add Patient error", status)
			$('#addClientfail').modal({
				backdrop : 'static',
				keyboard : false
			})
			$('#addClientfail').modal('show');
		});
		

	}

	$scope.addUser=function(){
		console.log("in login-->",$scope.PatientInfo);

		console.log("$scope.picArr-->",$scope.picArr);

		$scope.PatientInfo.docOne=$scope.docOne;
		$scope.PatientInfo.docTwo=$scope.docTwo;

		
$scope.PatientInfo.patientPhoto = $scope.photoPath;
console.log("in submit---------->", $scope.PatientInfo);
var formData = new FormData();

formData.append("profilePic", $scope.photoPath);
formData.append("patient", angular
		.toJson($scope.PatientInfo));

console.log("Form Data", formData);

var res = $http.post('patient/add', formData, {
	transformRequest : angular.identity,
	headers : {
		'Content-Type' : undefined
	}
})
res.success(function(data, status, headers, config) {
	console.log("add Patient success", data);
	$('#addClientSuccess').modal({
		backdrop : 'static',
		keyboard : false
	})
	$('#addClientSuccess').modal('show');
}), res.error(function(data, status, headers, config) {
	console.log("add Patient error", status)
	$('#addClientfail').modal({
		backdrop : 'static',
		keyboard : false
	})
	$('#addClientfail').modal('show');
});

	}


//dashobard data

$scope.products = [ { "Name": "Cheese", "price" : 2.50, "Location": "Refrigerated foods", qty: 2}, { "Name": "Crisps", "price" : 3, "Location": "the Snack isle", qty: 5}, { "Name": "pizza", "price" : 4, "Location": "Refrigerated foods", qty: 7 }, { "Name": "Chocolate", "price" : 1.50, "Location": "the Snack isle", qty: 8 }, { "Name": "Self-raising flour", "price" : 1.50, "Location": "Home baking", qty: 0 }, { "Name": "Ground almonds", "price" : 3, "Location": "Home baking", qty: 1 } ] 





$rootScope.logout = function() {
	let authToken="sfsa341sghhs76h@12j"
	$http({
		method : 'GET',
		url : 'logout',
		params:{
			authToken
		}
	}).success(function(data, status, headers, config) {
		$location.path("/login");
	}, function myError(response) {
		$location.path("/login");
	});
	$location.path("/login");
}








	$scope.uploadphoto = function() {
		setTimeout(function() {
			angular.element('#empPic').trigger('click');
		}, 0);

	};

	function readURL(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();
			reader.onload = function(e) {
				console.log("data-->", e);
				$scope.d = e.target.result;
				$('#imagePreview').css('background-image',
						'url(' + e.target.result + ')');
				$('#imagePreview').hide();
				$('#imagePreview').fadeIn(650);
			}
			reader.readAsDataURL(input.files[0]);
		}
	}
	$("#imageUpload").change(function() {
		console.log("this---->",this);
		readURL(this);
	});

	// Employee profile image upload

	// trigger read image function
	$scope.uploadphoto = function() {
		setTimeout(function() {
			angular.element('#empPic').trigger('click');
		}, 0);

	};
	// read and set image to logo header
	$scope.readImage = function(input, setTo,id) {

		console.log("this---->",input, setTo, id);

		if (input.files[0].size > 200000
				&& (input.files[0].type !== "image/png"
						|| input.files[0].type !== "image/jpeg" || input.files[0].type !== "image/jpg")) {
			angular.element('#empPic').val("");
			// $('#profileImg').attr('src',
			// 'images/avatar.jpg');
			$scope.photoUploadStatus = true;
			$scope.uploadErr = true;
			console.log("upload error");
			$scope.$apply();
		} else {
			$scope.photoUploadStatus = false;
			$scope.uploadErr = false;
			console.log($scope.photoUploadStatus)
			$scope.$apply();
			var reader = new FileReader();
			reader.onload = function(e) {
				$('#empImg').attr('src', e.target.result);
				console.log("upload success");
			}
			reader.readAsDataURL(input.files[0]);
			if(id==1){
				$scope.docOne=$("#empPic1").prop("files")[0]; 
			}
			else if(id==2){
				$scope.docTwo=$("#empPic2").prop("files")[0]; 
			}else{
				$scope.photoPath = $("#empPic").prop("files")[0];
			}
			$scope.picArr.push($scope.photoPath);
			console.log("image...", $scope.photoPath)
		}
		console.log("status", $scope.photoUploadStatus)
	}








});
