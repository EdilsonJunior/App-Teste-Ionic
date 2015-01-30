

angular.module('crud', [])

.controller('create', function($scope, $cordovaSQLite) {
  
 
    $scope.add = function(){

        var query = "INSERT INTO tabela(nome)VALUES ('"+$scope.nome+"');";
        $cordovaSQLite.execute(db, query).then(function(res) {
            console.log("insertId: " + res.insertId);

              alert("Usuario cadastrado");

              }, function (err) {
                  console.error(err);
              });

 }

});


/*
angular.module('crud', [''])

.controller('create', function($scope, $cordovaSQLite) {
  
    $scope.add = function(){
     window.alert("Usuario cadastrado");
        
        /*var query = "INSERT INTO teste (nome, email) VALUES ('a','b')";
        $cordovaSQLite.execute(db, query, ["test", 100]).then(function(res) {
        console.log("insertId: " + res.insertId);

              window.alert("Usuario cadastrado");
             
              }, function (err) {
                  console.error(err);
              });



   itens.push( {nome: $scope.nome});
    
    //window.alert(itens[scope.nome]);
    contador = contador+ 1;   
    }
});



*/
