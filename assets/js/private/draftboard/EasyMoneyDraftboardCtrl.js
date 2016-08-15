var myApp = angular.module('EasyMoneyDraftboardModule', ['toastr', 'ngAnimate', 'ui.bootstrap', 'pusher-angular']);

////////////////////////////
// DRAFTBOARD CONTROLLER
////////////////////////////
myApp.controller('EasyMoneyDraftboardCtrl', ['$scope', '$http', 'toastr', '$uibModal', function($scope, $http, toastr, $uibModal) {

    // Setup DraftboardForm loading state
    $scope.easymoneydraftboardForm = {
        loading: false
    }

    $scope.attributes = {};
    $scope.attributes.playerName = '';
    $scope.attributes.position = '';

    	io.socket.get('/EasyMoneydraftselection', function(data) {
    		$scope.attributes.playerName = data;
    		$scope.attributes.position = data;
    		$scope.$apply();
    	});

    	// $http({
		//     method: 'GET',
		//     url: '//localhost:1337/draftselection'
		// })
		// .success(function (data, status, headers, config) {
		//     $scope.attributes.playerName = data;
		//     $scope.attributes.position = data;
		// })
		// .error(function (data, status, headers, config) {
		//     // Something went wrong
		// });

    // ARRAY OF ROUNDS
    $scope.rounds = [
        {
            round: 'Round 1'
        },
        {
            round: 'Round 2'
        },
        {
            round: 'Round 3'
        },
        {
            round: 'Round 4'
        },
        {
            round: 'Round 5'
        },
        {
        	round: 'Round 6'
        },
        {
        	round: 'Round 7'
        },
        {
        	round: 'Round 8'
        },
        {
        	round: 'Round 9'
        },
        {
        	round: 'Round 10'
        },
        {
        	round: 'Round 11'
        },
        {
        	round: 'Round 12'
        },
        {
        	round: 'Round 13'
        },
        {
        	round: 'Round 14'
        },
        {
        	round: 'Round 15'
        },

    ];

    // ARRAY OF OWNERS
    $scope.owners1 = [
        {
            owner: 'Mack'
        },
        {
            owner: 'Jensen'
        },
        {
            owner: 'Mark'
        },
        {
            owner: 'Nick'
        },
        {
            owner: 'Jake'
        },
        {
            owner: 'Purk'
        },
        {
            owner: 'Danny'
        },
        {
            owner: 'Jordan'
        },
        {
            owner: 'Joe'
        },
        {
            owner: 'Canaan'
        },
        {
            owner: 'Paul'
        },
        {
            owner: 'Riley'
        }
    ];

    // ARRAY OF OWNERS
    $scope.owners2 = [
        {
            owner: 'Riley'
        },
        {
            owner: 'Paul'
        },
        {
            owner: 'Canaan'
        },
        {
            owner: 'Joe'
        },
        {
            owner: 'Jordan'
        },
        {
            owner: 'Danny'
        },
        {
            owner: 'Purk'
        },
        {
            owner: 'Jake'
        },
        {
            owner: 'Nick'
        },
        {
            owner: 'Mark'
        },
        {
            owner: 'Jensen'
        },
        {
            owner: 'Mack'
        }
    ];

    // ARRAY OF OWNERS
    $scope.owners3 = [
        {
            owner: 'Mack'
        },
        {
            owner: 'Jensen'
        },
        {
            owner: 'Mark'
        },
        {
            owner: 'Nick'
        },
        {
            owner: 'Jake'
        },
        {
            owner: 'Purk'
        },
        {
            owner: 'Danny'
        },
        {
            owner: 'Jordan'
        },
        {
            owner: 'Joe'
        },
        {
            owner: 'Canaan'
        },
        {
            owner: 'Paul'
        },
        {
            owner: 'Riley'
        }
    ];

    // ARRAY OF OWNERS
    $scope.owners4 = [
        {
            owner: 'Riley'
        },
        {
            owner: 'Paul'
        },
        {
            owner: 'Canaan'
        },
        {
            owner: 'Joe'
        },
        {
            owner: 'Jordan'
        },
        {
            owner: 'Danny'
        },
        {
            owner: 'Purk'
        },
        {
            owner: 'Jake'
        },
        {
            owner: 'Nick'
        },
        {
            owner: 'Mark'
        },
        {
            owner: 'Jensen'
        },
        {
            owner: 'Mack'
        }
    ];

    // ARRAY OF OWNERS
    $scope.owners5 = [
        {
            owner: 'Mack'
        },
        {
            owner: 'Jensen'
        },
        {
            owner: 'Mark'
        },
        {
            owner: 'Nick'
        },
        {
            owner: 'Jake'
        },
        {
            owner: 'Purk'
        },
        {
            owner: 'Danny'
        },
        {
            owner: 'Jordan'
        },
        {
            owner: 'Joe'
        },
        {
            owner: 'Canaan'
        },
        {
            owner: 'Paul'
        },
        {
            owner: 'Riley'
        }
    ];

    // ARRAY OF OWNERS
    $scope.owners6 = [
        {
            owner: 'Riley'
        },
        {
            owner: 'Paul'
        },
        {
            owner: 'Canaan'
        },
        {
            owner: 'Joe'
        },
        {
            owner: 'Jordan'
        },
        {
            owner: 'Danny'
        },
        {
            owner: 'Purk'
        },
        {
            owner: 'Jake'
        },
        {
            owner: 'Nick'
        },
        {
            owner: 'Mark'
        },
        {
            owner: 'Jensen'
        },
        {
            owner: 'Mack'
        }
    ];

    // ARRAY OF OWNERS
    $scope.owners7 = [
        {
            owner: 'Mack'
        },
        {
            owner: 'Jensen'
        },
        {
            owner: 'Mark'
        },
        {
            owner: 'Nick'
        },
        {
            owner: 'Jake'
        },
        {
            owner: 'Purk'
        },
        {
            owner: 'Danny'
        },
        {
            owner: 'Jordan'
        },
        {
            owner: 'Joe'
        },
        {
            owner: 'Canaan'
        },
        {
            owner: 'Paul'
        },
        {
            owner: 'Riley'
        }
    ];

    // ARRAY OF OWNERS
    $scope.owners8 = [
        {
            owner: 'Riley'
        },
        {
            owner: 'Paul'
        },
        {
            owner: 'Canaan'
        },
        {
            owner: 'Joe'
        },
        {
            owner: 'Jordan'
        },
        {
            owner: 'Danny'
        },
        {
            owner: 'Purk'
        },
        {
            owner: 'Jake'
        },
        {
            owner: 'Nick'
        },
        {
            owner: 'Mark'
        },
        {
            owner: 'Jensen'
        },
        {
            owner: 'Mack'
        }
    ];

    // ARRAY OF OWNERS
    $scope.owners9 = [
        {
            owner: 'Mack'
        },
        {
            owner: 'Jensen'
        },
        {
            owner: 'Mark'
        },
        {
            owner: 'Nick'
        },
        {
            owner: 'Jake'
        },
        {
            owner: 'Purk'
        },
        {
            owner: 'Danny'
        },
        {
            owner: 'Jordan'
        },
        {
            owner: 'Joe'
        },
        {
            owner: 'Canaan'
        },
        {
            owner: 'Paul'
        },
        {
            owner: 'Riley'
        }
    ];

    // ARRAY OF OWNERS
    $scope.owners10 = [
        {
            owner: 'Riley'
        },
        {
            owner: 'Paul'
        },
        {
            owner: 'Canaan'
        },
        {
            owner: 'Joe'
        },
        {
            owner: 'Jordan'
        },
        {
            owner: 'Danny'
        },
        {
            owner: 'Purk'
        },
        {
            owner: 'Jake'
        },
        {
            owner: 'Nick'
        },
        {
            owner: 'Mark'
        },
        {
            owner: 'Jensen'
        },
        {
            owner: 'Mack'
        }
    ];

    // ARRAY OF OWNERS
    $scope.owners11 = [
        {
            owner: 'Mack'
        },
        {
            owner: 'Jensen'
        },
        {
            owner: 'Mark'
        },
        {
            owner: 'Nick'
        },
        {
            owner: 'Jake'
        },
        {
            owner: 'Purk'
        },
        {
            owner: 'Danny'
        },
        {
            owner: 'Jordan'
        },
        {
            owner: 'Joe'
        },
        {
            owner: 'Canaan'
        },
        {
            owner: 'Paul'
        },
        {
            owner: 'Riley'
        }
    ];

    // ARRAY OF OWNERS
    $scope.owners12 = [
        {
            owner: 'Riley'
        },
        {
            owner: 'Paul'
        },
        {
            owner: 'Canaan'
        },
        {
            owner: 'Joe'
        },
        {
            owner: 'Jordan'
        },
        {
            owner: 'Danny'
        },
        {
            owner: 'Purk'
        },
        {
            owner: 'Jake'
        },
        {
            owner: 'Nick'
        },
        {
            owner: 'Mark'
        },
        {
            owner: 'Jensen'
        },
        {
            owner: 'Mack'
        }
    ];

    // ARRAY OF OWNERS
    $scope.owners13 = [
        {
            owner: 'Mack'
        },
        {
            owner: 'Jensen'
        },
        {
            owner: 'Mark'
        },
        {
            owner: 'Nick'
        },
        {
            owner: 'Jake'
        },
        {
            owner: 'Purk'
        },
        {
            owner: 'Danny'
        },
        {
            owner: 'Jordan'
        },
        {
            owner: 'Joe'
        },
        {
            owner: 'Canaan'
        },
        {
            owner: 'Paul'
        },
        {
            owner: 'Riley'
        }
    ];

    // ARRAY OF OWNERS
    $scope.owners14 = [
        {
            owner: 'Riley'
        },
        {
            owner: 'Paul'
        },
        {
            owner: 'Canaan'
        },
        {
            owner: 'Joe'
        },
        {
            owner: 'Jordan'
        },
        {
            owner: 'Danny'
        },
        {
            owner: 'Purk'
        },
        {
            owner: 'Jake'
        },
        {
            owner: 'Nick'
        },
        {
            owner: 'Mark'
        },
        {
            owner: 'Jensen'
        },
        {
            owner: 'Mack'
        }
    ];

    // ARRAY OF OWNERS
    $scope.owners15 = [
        {
            owner: 'Mack'
        },
        {
            owner: 'Jensen'
        },
        {
            owner: 'Mark'
        },
        {
            owner: 'Nick'
        },
        {
            owner: 'Jake'
        },
        {
            owner: 'Purk'
        },
        {
            owner: 'Danny'
        },
        {
            owner: 'Jordan'
        },
        {
            owner: 'Joe'
        },
        {
            owner: 'Canaan'
        },
        {
            owner: 'Paul'
        },
        {
            owner: 'Riley'
        }
    ];


    $scope.position = '';

    $scope.set_color = function(position) {
    	if(position.position == 'QB') {
    		return { background: '#FFABF1' }
    	}
    	else if(position.position == 'RB') {
    		return { background: '#ABFFB9' }
    	}
    	else if(position.position == 'WR') {
    		return { background: '#ABF1FF' }
    	}
    	else if(position.position == 'TE') {
    		return { background: '#FF8770' }
    	}
    	else if(position.position == 'DST') {
    		return { background: '#F1FFAB' }
    	}
    	else if(position.position == 'K') {
    		return { background: '#F1FFAB' }
    	}
    }


    $scope.open = function() {

        var uibModalInstance = $uibModal.open({
            templateUrl: 'table.html',
            controller: 'uibModalInstanceCtrl'
        });
        uibModalInstance.result.then(function(newAttribute) {
            $scope.attributes.playerName.push(newAttribute);
        });
    };

}]);


///////////////////////////
// MODAL CONTROLLER
///////////////////////////
myApp.controller('uibModalInstanceCtrl', ['$scope', '$http', '$uibModalInstance', function($scope, $http, $uibModalInstance) {
	$scope.submitEasyMoneyDraftboardForm = function() {

		// Submit a draft selection
		$scope.EasyMoneyDraftboardForm.loading = true;

        $http.post('/easyMoneyDraftboard', {

            playerName: $scope.EasyMoneyDraftboardForm.playerName,
            position: 	$scope.EasyMoneyDraftboardForm.position

        })
        .then(function onSuccess(sailsResponse) {
            // window.location = '/';
        })
        .catch(function onError(sailsResponse) {
            console.log(err);
        })
        .finally(function eitherWay() {
            $scope.EasyMoneyDraftboardForm.loading = false;
        });

		$uibModalInstance.close({
			'playerName': $scope.EasyMoneyDraftboardForm.playerName,
			'position': $scope.EasyMoneyDraftboardForm.position
		});
	};

	$scope.cancel = function() {
		$uibModalInstance.dismiss('cancel');
	};
}]);

