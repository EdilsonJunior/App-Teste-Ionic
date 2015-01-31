


angular.module('crud', [])

.controller('create', function($scope, $cordovaSQLite) {
  
 
    $scope.add = function(){


        var query = "INSERT INTO tabela (nome) VALUES (?)";
        $cordovaSQLite.execute(db, query, [$scope.nome]).then(function(res) {
            console.log("INSERT ID -> " + res.insertId);
            alert("Usuario "+$scope.nome+" cadastrado com Sucesso");
        }, function (err) {
            console.error(err);
             alert("erro");
        });
    
    /*
        var query = "INSERT INTO tabela(nome)VALUES ('"+$scope.nome+"');";
        $cordovaSQLite.execute(db, query).then(function(res) {
            console.log("insertId: " + res.insertId);

              alert("Usuario cadastrado com Sucesso");

              }, function (err) {
                  console.error(err);
                  alert("erro");
              });
*/
 }

})

.controller('read.update.delete', function($scope, $cordovaSQLite) {
  
 
    $scope.ler = function(){


        var query = "SELECT nome FROM tabela WHERE nome = ?";
        $cordovaSQLite.execute(db, query,[$scope.busca]).then(function(res) {
            if(res.rows.length > 0) {
                console.log("SELECTED -> " + res.rows.item(0).nome);
                alert("encontrado : " + res.rows.item(0).nome);
                $scope.flag = "true";
                  $scope.flagDel = "true";

            } else {
                console.log("Não encontrado");
                alert($scope.busca+" não encontrado");
                $scope.flag = "false";
                  $scope.flagDel = "false";
            }
        }, function (err) {
            console.error(err);
                alert("Erro");
            
        });

 }


   $scope.atualizar = function(){

        var query = "UPDATE tabela SET nome = ? WHERE nome = ?";
        $cordovaSQLite.execute(db, query,[$scope.atualiza , $scope.busca]).then(function(res) {
                                alert("Atualizado: "+$scope.busca+ " por "+$scope.atualiza);

                                console.log(res);
              }, function (err) {
                  console.error(err);
                  alert("Erro de atualização");
              });

 }

$scope.deletar = function(){

        var query = "DELETE FROM tabela WHERE nome = ? ";
        $cordovaSQLite.execute(db, query,[$scope.busca]).then(function(res) {
                                alert("Deletado com Sucesso");
                                console.log(res);
              }, function (err) {
                  console.error(err);
                  alert("Erro ao deletar");
              });

 }


});


