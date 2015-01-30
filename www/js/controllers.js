angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

 
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})


.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);

})

/*

.controller('create', function($scope) {
    $scope.itens = [];
    window.alert( $scope.nome );
});

*/
/*
var teste = angular.module('crud',[]);
  
teste.controller('add', ['$scope', function($scope) {
  //  $scope.contacts = ["hi@email.com", "hello@email.com"];
 
    $scope.create = function() {
      window.alert('merda');
    //    $scope.contacts.push($scope.contact);
      //  $scope.contact = "";
    }
}]);
*/