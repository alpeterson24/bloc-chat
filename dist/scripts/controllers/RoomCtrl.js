(function() {
   function RoomCtrl(Room) {
        this.roomData = Room;
   }
 
   angular
     .module('blocChat')
     .controller('RoomCtrl', ['Room', RoomCtrl]);
})();
