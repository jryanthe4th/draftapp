var myApp = angular.module('DraftboardModule', ['toastr', 'ngAnimate', 'ui.bootstrap', 'pusher-angular']);

////////////////////////////
// DRAFTBOARD CONTROLLER
////////////////////////////
myApp.controller('DraftboardCtrl', ['$scope', '$http', 'toastr', '$uibModal', '$pusher', function($scope, $http, toastr, $uibModal, $pusher) {

    // Setup DraftboardForm loading state
    $scope.draftboardForm = {
        loading: false
    }

    $scope.attributes = {};
    $scope.attributes.playerName = '';
    $scope.attributes.position = '';

    	io.socket.get('/draftselection', function(data) {
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
        }
    ];

////// 2017 DRAFT ////////////////////////////////////////////////
    // ARRAY OF OWNERS
    $scope.owners1_2017 = [
        {
            owner: 'Jensen'
        },
        {
            owner: 'Mack'
        },
        {
            owner: 'Brayden'
        },
        {
            owner: 'Jake'
        },
        {
            owner: 'Jake'
        },
        {
            owner: 'Jake'
        },
        {
            owner: 'Jensen'
        },
        {
            owner: 'Nick'
        },
        {
            owner: 'Jensen'
        },
        {
            owner: 'Canaan'
        },
        {
            owner: 'Riley'
        },
        {
            owner: 'Danny'
        }
    ];

    // ARRAY OF OWNERS
    $scope.owners2_2017 = [
        {
            owner: 'Jensen'
        },
        {
            owner: 'Jordan'
        },
        {
            owner: 'Mack'
        },
        {
            owner: 'Mack'
        },
        {
            owner: 'Jake'
        },
        {
            owner: 'Jake'
        },
        {
            owner: 'Joe'
        },
        {
            owner: 'Joe'
        },
        {
            owner: 'Purk'
        },
        {
            owner: 'Canaan'
        },
        {
            owner: 'Austin'
        },
        {
            owner: 'Purk'
        }
    ];

    // ARRAY OF OWNERS
    $scope.owners3_2017 = [
        {
            owner: 'Jensen'
        },
        {
            owner: 'Mack'
        },
        {
            owner: 'Jensen'
        },
        {
            owner: 'Austin'
        },
        {
            owner: 'Riley'
        },
        {
            owner: 'Jordan'
        },
        {
            owner: 'Brayden'
        },
        {
            owner: 'Nick'
        },
        {
            owner: 'Purk'
        },
        {
            owner: 'Canaan'
        },
        {
            owner: 'Riley'
        },
        {
            owner: 'Purk'
        }
    ];

    // ARRAY OF OWNERS
    $scope.owners4_2017 = [
        {
            owner: 'Canaan'
        },
        {
            owner: 'Mack'
        },
        {
            owner: 'Brayden'
        },
        {
            owner: 'Austin'
        },
        {
            owner: 'Jake'
        },
        {
            owner: 'Jensen'
        },
        {
            owner: 'Joe'
        },
        {
            owner: 'Nick'
        },
        {
            owner: 'Canaan'
        },
        {
            owner: 'Josh'
        },
        {
            owner: 'Jordan'
        },
        {
            owner: 'Nick'
        }
    ];

    // ARRAY OF OWNERS
    $scope.owners5_2017 = [
        {
            owner: 'Danny'
        },
        {
            owner: 'Mack'
        },
        {
            owner: 'Brayden'
        },
        {
            owner: 'Austin'
        },
        {
            owner: 'Jake'
        },
        {
            owner: 'Jensen'
        },
        {
            owner: 'Joe'
        },
        {
            owner: 'Nick'
        },
        {
            owner: 'Josh'
        },
        {
            owner: 'Riley'
        },
        {
            owner: 'Jordan'
        },
        {
            owner: 'Nick'
        }
    ];


////// 2016 DRAFT ////////////////////////////////////
    // ARRAY OF OWNERS
    $scope.owners1 = [
        {
            owner: 'Purkey'
        },
        {
            owner: 'Jake'
        },
        {
            owner: 'Joe'
        },
        {
            owner: 'Purkey'
        },
        {
            owner: 'Jensen'
        },
        {
            owner: 'Purkey'
        },
        {
            owner: 'Joe'
        },
        {
            owner: 'Danny'
        },
        {
            owner: 'Riley'
        },
        {
            owner: 'Jensen'
        },
        {
            owner: 'Jordan'
        },
        {
            owner: 'Jordan'
        }
    ];

    // ARRAY OF OWNERS
    $scope.owners2 = [
        {
            owner: 'Purkey'
        },
        {
            owner: 'Jake'
        },
        {
            owner: 'Joe'
        },
        {
            owner: 'Danny'
        },
        {
            owner: 'Purkey'
        },
        {
            owner: 'Jensen'
        },
        {
            owner: 'Jensen'
        },
        {
            owner: 'Nick'
        },
        {
            owner: 'Riley'
        },
        {
            owner: 'Nick'
        },
        {
            owner: 'Purkey'
        },
        {
            owner: 'Purkey'
        }
    ];

    // ARRAY OF OWNERS
    $scope.owners3 = [
        {
            owner: 'Purkey'
        },
        {
            owner: 'Canaan'
        },
        {
            owner: 'Joe'
        },
        {
            owner: 'Purkey'
        },
        {
            owner: 'Canaan'
        },
        {
            owner: 'Jensen'
        },
        {
            owner: 'Purkey'
        },
        {
            owner: 'Nick'
        },
        {
            owner: 'Josh'
        },
        {
            owner: 'Riley'
        },
        {
            owner: 'Jordan'
        },
        {
            owner: 'Purkey'
        }
    ];

    // ARRAY OF OWNERS
    $scope.owners4 = [
        {
            owner: 'Purkey'
        },
        {
            owner: 'Jake'
        },
        {
            owner: 'Joe'
        },
        {
            owner: 'Mack'
        },
        {
            owner: 'Jensen'
        },
        {
            owner: 'Jensen'
        },
        {
            owner: 'Jensen'
        },
        {
            owner: 'Nick'
        },
        {
            owner: 'Purkey'
        },
        {
            owner: 'Josh'
        },
        {
            owner: 'Jordan'
        },
        {
            owner: 'Nick'
        }
    ];

    // ARRAY OF OWNERS
	$scope.owners5 = [
        {
            owner: 'Danny'
        },
        {
            owner: 'Jake'
        },
        {
            owner: 'Joe'
        },
        {
            owner: 'Mack'
        },
        {
            owner: 'Canaan'
        },
        {
            owner: 'Jensen'
        },
        {
            owner: 'Jensen'
        },
        {
            owner: 'Nick'
        },
        {
            owner: 'Josh'
        },
        {
            owner: 'Riley'
        },
        {
            owner: 'Jordan'
        },
        {
            owner: 'Nick'
        }
    ];



//////////////////////////////////////////////////////////////////////////


    // $scope.attributes.ownerRd1 = '';

    // // io.socket.get('/draftorder', function(data) {
    // // 	$scope.attributes.ownerRd1 = data;
    // // 	$scope.$apply();
    // // });

    // $scope.submitDraftOrderForm = function() {

    // 	// Submit a owner name
    // 	$scope.draftorderForm.loading = true;

    // 	$http.post('/draftorder', {

    // 		ownerRd1: $scope.draftorderForm.ownerRd1

    // 	})
    // 	.then(function onSuccess(sailsResponse) {
    //         // window.location = '/';
    //     })
    //     .catch(function onError(sailsResponse) {
    //         console.log(err);
    //     })
    //     .finally(function eitherWay() {
    //     	$scope.draftorderForm.loading = false;
    //     });
    // };

    // Set-up loading state
    $scope.draftGridForm = {
    	loading: false
    }

    // Submit owners and rounds form
    $scope.draftGridForm = function() {

    	$scope.draftGridForm.loading = true;

    	$http.post('/draftorder', {

    		numberOfOwners : $scope.draftGridForm.numberOfOwners,
    		numberOfRounds : $scope.draftGridForm.numberOfRounds

    	})
    	.then(function onSuccess(sailsResponse) {
    		window.location = '/draftorder'
    	})
    	.catch(function onError(sailsResponse) {

    	})
    	.finally(function eitherWay() {
    		$scope.ownersAndRoundsForm.loading = false;
    	});
    };


//////////////////////////////////////////////////////////////////////////



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
	$scope.submitDraftboardForm = function() {

		// Submit a draft selection
		$scope.draftboardForm.loading = true;

        $http.post('/draftboard', {

            playerName: $scope.draftboardForm.playerName,
            position: 	$scope.draftboardForm.position

        })
        .then(function onSuccess(sailsResponse) {
            // window.location = '/';
        })
        .catch(function onError(sailsResponse) {
            console.log(err);
        })
        .finally(function eitherWay() {
            $scope.draftboardForm.loading = false;
        });

		$uibModalInstance.close({
			'playerName': $scope.draftboardForm.playerName,
			'position': $scope.draftboardForm.position
		});
	};

	$scope.cancel = function() {
		$uibModalInstance.dismiss('cancel');
	};
}]);

