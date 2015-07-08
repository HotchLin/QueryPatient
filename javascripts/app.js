(function () {
	angular.module('myApp', ['ui.bootstrap'])
	.controller('patientCtrl', ['$http', '$scope',
		function ($http, $scope) {

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

			//分頁
			$scope.filteredPatients = [];
			$scope.itemsPerPage = 20;
			$scope.currentPage = 1;

			$scope.patients = [];

			$scope.getPatients = function () {
				$http.get('https://tonyq.org/kptaipei/api-20150628.php')
					    .success(function (response) {
					    	$scope.patients = response.data;
					    	$scope.paging();
					    })
					.error(function (err) {//handle error
					})
			};

				$scope.getPatients();

				$scope.paging = function () {
					var begin = (($scope.currentPage - 1) * $scope.itemsPerPage);
					var end = begin + $scope.itemsPerPage;
					$scope.filteredPatients = $scope.patients.slice(begin, end);
				};

				$scope.pageChanged = function () {
					$scope.paging();
				};
			
				

		}])
})();