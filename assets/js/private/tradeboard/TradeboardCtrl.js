var myApp = angular.module('TradeboardModule', ['ngAnimate', 'ui.bootstrap']);

myApp.controller('TradeboardCtrl', ['$scope', '$http', '$uibModal', function($scope, $http, $uibModal) {

	$scope.tradeboardForm = {
		loading: false
	}

	$scope.attributes = {};
	$scope.attributes.ownerA = '';
	$scope.attributes.tradeA1 = '';
	$scope.attributes.tradeA2 = '';
	$scope.attributes.tradeA3 = '';
	$scope.attributes.tradeA4 = '';
	$scope.attributes.tradeA5 = '';

	$scope.attributes.ownerB = '';
	$scope.attributes.tradeB1 = '';
	$scope.attributes.tradeB2 = '';
	$scope.attributes.tradeB3 = '';
	$scope.attributes.tradeB4 = '';
	$scope.attributes.tradeB5 = '';


	io.socket.get('/trade', function(data) {

		$scope.attributes.ownerA = data;
		$scope.attributes.tradeA1 = data;
		$scope.attributes.tradeA2 = data;
		$scope.attributes.tradeA3 = data;
		$scope.attributes.tradeA4 = data;
		$scope.attributes.tradeA5 = data;

		$scope.attributes.ownerB = data;
		$scope.attributes.tradeB1 = data;
		$scope.attributes.tradeB2 = data;
		$scope.attributes.tradeB3 = data;
		$scope.attributes.tradeB4 = data;
		$scope.attributes.tradeB5 = data;

		$scope.$apply();

	});


	$scope.open = function() {

		var uibModalInstance = $uibModal.open({
			templateUrl: 'table.html',
			controller: 'uibModalInstanceCtrl'
		});
		uibModalInstance.result.then(function(newAttribute) {
			$scope.attributes.ownerA.push(newAttribute);
			$scope.attributes.tradeA1.push(newAttribute);
			$scope.attributes.tradeA2.push(newAttribute);
			$scope.attributes.tradeA3.push(newAttribute);
			$scope.attributes.tradeA4.push(newAttribute);
			$scope.attributes.tradeA5.push(newAttribute);

			$scope.attributes.ownerB.push(newAttribute);
			$scope.attributes.tradeB1.push(newAttribute);
			$scope.attributes.tradeB2.push(newAttribute);
			$scope.attributes.tradeB3.push(newAttribute);
			$scope.attributes.tradeB4.push(newAttribute);
			$scope.attributes.tradeB5.push(newAttribute);
		});
	};

}]);


///////////////////////////
// MODAL CONTROLLER
///////////////////////////
myApp.controller('uibModalInstanceCtrl', ['$scope', '$http', '$uibModalInstance', function($scope, $http, $uibModalInstance) {
	$scope.submitTradeboardForm = function() {

		// Submit a trade
		$scope.tradeboardForm.loading = true;

        $http.post('/tradeboard', {

        	ownerA: $scope.tradeboardForm.ownerA,
			tradeA1: $scope.tradeboardForm.tradeA1,
			tradeA1: $scope.tradeboardForm.tradeA2,
			tradeA1: $scope.tradeboardForm.tradeA3,
			tradeA1: $scope.tradeboardForm.tradeA4,
			tradeA1: $scope.tradeboardForm.tradeA5,

			ownerB: $scope.tradeboardForm.ownerB,
			tradeB1: $scope.tradeboardForm.tradeB1,
			tradeB2: $scope.tradeboardForm.tradeB2,
			tradeB3: $scope.tradeboardForm.tradeB3,
			tradeB4: $scope.tradeboardForm.tradeB4,
			tradeB5: $scope.tradeboardForm.tradeB5

        })
        .then(function onSuccess(sailsResponse) {
            // window.location = '/';
        })
        .catch(function onError(sailsResponse) {
            console.log(err);
        })
        .finally(function eitherWay() {
            $scope.tradeboardForm.loading = false;
        });

		$uibModalInstance.close({
			'ownerA': $scope.tradeboardForm.ownerA,
			'tradeA1': $scope.tradeboardForm.tradeA1,
			'tradeA1': $scope.tradeboardForm.tradeA2,
			'tradeA1': $scope.tradeboardForm.tradeA3,
			'tradeA1': $scope.tradeboardForm.tradeA4,
			'tradeA1': $scope.tradeboardForm.tradeA5,

			'ownerB': $scope.tradeboardForm.ownerB,
			'tradeB1': $scope.tradeboardForm.tradeB1,
			'tradeB2': $scope.tradeboardForm.tradeB2,
			'tradeB3': $scope.tradeboardForm.tradeB3,
			'tradeB4': $scope.tradeboardForm.tradeB4,
			'tradeB5': $scope.tradeboardForm.tradeB5
		});
	};

	$scope.cancel = function() {
		$uibModalInstance.dismiss('cancel');
	};
}]);
