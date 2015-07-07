(function () {
	angular.module('myApp', [])
	.controller('patientCtrl', ['$http', '$scope',
		function ($http, $scope) {
			$http.get('https://tonyq.org/kptaipei/api-20150628.php')
				 .success(function (response) {
				 	$scope.patients = [];
				 	$scope.patients = response.data;

				 	console.log($scope.patients);
				 })
				 .error(function (err) {
				 	//handle error
				 })

			//救護狀態css
			$scope.statusClass = function (status) {

				switch (status) {
					case '重傷':
						return 'label-danger';
						break;
					case '中傷':
						return 'label-warning';
						break;
					case '輕傷':
						return 'label-success';
						break;
					default:
						break;

				}

			};

		}])
})();