// YOUR CODE HERE:
//$(document).ready(function() {
var app = {
  rooms: [],
  chats: {},
  server: 'https://api.parse.com/1/classes/messages',
  init: function() {
    // app.fetch(server);
		// app.addFriend();
		// app.addRoom();
    // app.addMessage();
    app.clearMessages();
  },

  send: function(message) {
    $.ajax({
      url: app.server,
      type: 'POST',
      data: JSON.stringify(message),
      text: message,
      contentType: 'application/json',
      success: function(data) {
        console.log(data);
        // app.fetch(server);
      },
      error: function(data) {
        console.error('chatterbox: Failed to send message');
      }
    });
  },  //end of send
  fetch: function(message) {
    console.log('hi');
    $.ajax({
      url: app.server,
      type: 'GET',
      contentType: 'application/json',
      success: function(data) {
				//app.clearMessages();
        chats = data;
        console.log(chats);
        //addMessage(data);
      },
      error: function (data) {
        console.error('chatterbox: Failed to send message');
      }
    });
  },

  addMessage: function(message, room) {
    


    //For appending to DOM only
    //Does not call send
    if (app.rooms.indexOf(room) === -1) {
      addRoom(room);
    }
    // add room as class for each msg
  },

  clearMessages: function() {
    var $childArr = $('#chats').children();
    for (var i = 0; i < $childArr.length; i++) {
      $childArr[i].remove();
    }
  },

  addFriend: function() {

  },

  addRoom: function (room) {
    
  },

  handleSubmit: function(msg) {
    app.send({
      text: msg,
      username: username
    });
  }

};
 //});