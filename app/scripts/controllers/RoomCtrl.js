(function() {
   function RoomCtrl() {
        this.rooms = [];
        for (var i=0 ; i <3; i ++) {
            this.rooms.push('Room' + '' + (i + 1) )
        }
    }
   angular
     .module('blocChat')
     .controller('RoomCtrl', ['Room', RoomCtrl]);
})();
