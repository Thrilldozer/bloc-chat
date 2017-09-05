(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
        messages.orderByChild(roomId);
    };

    return Message;
    };
  

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();