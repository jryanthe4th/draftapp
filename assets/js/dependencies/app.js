

io.socket.on('connect', function(socket) {
    console.log('connected!')
    io.socket.on('disconnect', function() {
    	console.log('user disconnected')
    });
});









// io.socket.on('connection', function(socket) {
// 	console.log('A user is connected!');
// 	socket.on('draft selection added', function(status) {
// 		io.emit('draft selection added', msg);
// 	});




// 	// switch (event.verb) {
// 	// 	case 'created':
// 	// 		$scope.attributes.playerName.push(event.data);
// 	// 		$scope.$apply();
// 	// 		break;
// 	// }
// });

// io.socket.on('connect', function(socket) {
//     console.log('Connected!');
// });


///////////////// PUSHER
// var client = new Pusher('176fb3ce7c5d5262c035', {
// 	appId: '194275',
// 	secret: 'd1147a2ab56dae49ba98',
// 	encrypted: true
// });
// var pusher = $pusher(client);
// var my_private_channel = pusher.subscribe('private-my-channel');
// my_private_channel.bind('new-draft-pick',
// 	function(data) {
// 		// update with new draft pick

// 	}
// );
// pusher.connection.bind('state-change', function(states) {
// 	// var previous = states.previous...
// })
// //channel = pusher.channel('private-my-channel');
// //var my_presence_channel = pusher.subscribe('presence-my-channel');
