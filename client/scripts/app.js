// YOUR CODE HERE:
//$(document).ready(function() {
var app = {
  rooms: [],
  chats: {},
  server: 'https://api.parse.com/1/classes/messages',
  init: function() {
    app.fetch(app.server);
		// app.addFriend();
		//app.addRoom();
    // app.addMessage();
    // app.clearMessages();
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
        app.fetch(app.server);
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
        app.addMessage();
      },
      error: function (data) {
        console.error('chatterbox: Failed to send message');
      }
    });
  },

  addMessage: function() {
    //For appending to DOM only
    //Does not call send
    //setInterval(function () {
     $('#refresh').click(function(){
      $('#chats').empty();
      for (var i = 0; i < chats.results.length; i++) {
        $('#chats').append('<div class="' + chats.results[i].roomname + '"><em>' + chats.results[i].username + ': </em>' + chats.results[i].text + '</div>');
        if (app.rooms.indexOf(chats.results[i].roomname) === -1 && chats.results[i].roomname !== undefined) {
          app.addRoom(chats.results[i].roomname);

        }
      }
    });
   // }, 20);
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
    app.rooms.push(room);
    $('select').append('<option value="' + room + '">' + room + '</option>');
    //do whatever dom stuff
  },

  handleSubmit: function(msg, room) {
    app.send({
      text: msg,
      username: username,
      roomname: room
    });
  }

};
 //});