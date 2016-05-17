var myApp = angular.module('TradeboardModule', ['ngAnimate', 'ui.bootstrap']);

myApp.controller('TradeboardCtrl', ['$scope', '$http', '$uibModal', function($scope, $http, $uibModal) {

	$scope.tradeboardForm = {
		loading: false
	}

	$scope.attributes = {};
	$scope.attributes.trade = '';


	io.socket.get('/trade', function(data) {

		$scope.attributes.trade = data;

		$scope.$apply();

	});


	$scope.open = function() {

		var uibModalInstance = $uibModal.open({
			templateUrl: 'table.html',
			controller: 'uibModalInstanceCtrl'
		});
		uibModalInstance.result.then(function(newAttribute) {
			$scope.attributes.trade.push(newAttribute);
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

        	trade: $scope.tradeboardForm.trade

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
			'trade': $scope.tradeboardForm.trade
		});
	};

	$scope.cancel = function() {
		$uibModalInstance.dismiss('cancel');
	};
}]);
