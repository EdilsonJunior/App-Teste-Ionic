


angular.module('crud', [])

.controller('create', function($scope, $cordovaSQLite) {
  
    //função create
    $scope.add = function(){


        var query = "INSERT INTO tabela (nome) VALUES (?)";
        $cordovaSQLite.execute(db, query, [$scope.nome]).then(function(res) {
             //comando reconhecido pelo sqlite, usuario então foi cadastrado

            console.log("INSERT ID -> " + res.insertId);
            alert("Usuario "+$scope.nome+" cadastrado com Sucesso");

        }, function (err) {
             //sql não reconhecida pelo sqlite
            console.error(err);
             alert("erro");
        });
 
 }

})

//read update e delete no mesmo controler
.controller('read.update.delete', function($scope, $cordovaSQLite) {
  
    //função do read
    $scope.ler = function(){


        var query = "SELECT nome FROM tabela WHERE nome = ?";
        $cordovaSQLite.execute(db, query,[$scope.busca]).then(function(res) {
           
            //se for maior que 0 é oq encontrou um registro
            if(res.rows.length > 0) {
                //mostrando usuario encontrado 
                console.log("SELECTED -> " + res.rows.item(0).nome);
                alert("encontrado : " + res.rows.item(0).nome);
                $scope.flag = true;
                $scope.flagDel = true;
                $scope.atualiza= $scope.busca;
            } else {
                //caso o usuario não tenha sido encontrado
                console.log("Não encontrado");
                alert($scope.busca+" não encontrado");
                $scope.flag = false;
                $scope.flagDel = false;            }
        }, function (err) {
            console.error(err);
                alert("Erro");
            
        });

 }

   //função update
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
//função delete
$scope.deletar = function(){

        var query = "DELETE FROM tabela WHERE nome = ? ";
        $cordovaSQLite.execute(db, query,[$scope.busca]).then(function(res) {
                                alert("Deletado com Sucesso");
                                console.log(res);
                                $scope.flag = false;
                               $scope.flagDel = false; 
                               $scope.busca = "";
                               $scope.atualiza = "";
              }, function (err) {
                  console.error(err);
                  alert("Erro ao deletar");
              });

 }


});


angular.module('github', [])


.controller('usergit', function($scope, $cordovaSQLite) {
  
 //redirecionar para a pagina dos dados do github
    $scope.userGitHub = function(){
      alert("Direcionando para dados github de "+$scope.user);
      window.location="https://api.github.com/users/"+$scope.user;
 
 }

});