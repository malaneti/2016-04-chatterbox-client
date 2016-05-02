// YOUR CODE HERE:

$(document).ready(function(){

var app = {
	server: 'https://api.parse.com/1/classes/chatterbox',
	init: function(){
		app.fetch();
		app.addFriend();
		app.addRoom();
		app.addMessage();

	},
	send: function(message){
	$.ajax({
		url: app.server,
		type: "POST",
		data:JSON.stringify(message),
		contentType: "applicatoin/json",
		success: function(data){
			console.log('chatterbox: Message sent')
		}
		error: function(data){
			console.log("chatterbox: Failed to send message")
		}

	})
	},  //end of send 
	fetch: function(message){
		$.ajax({
			url: app.server,
			type: "GET",
			data: 
			contentType: "application/json"
			success: function(data){

			}
		    error: function (data) {
          	console.error('chatterbox: Failed to send message');
          }
		})
	},

	submitMessage: function(){

	},

	addFriend: function(){

	},

	addRoom: function (){

	},



	









		}










})