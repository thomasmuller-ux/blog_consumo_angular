angular.module('blog', []);
angular.module('blog').controller('Rest', function ($scope, $http){
  $http.get('https://api-fake-blog.herokuapp.com/postagens').
      success(function(data) {
          $scope.publicacoes = data;
          $scope.linha = function (index) {
            window["num"] = index;
            localStorage.setItem("linha", num);
        };
      }
  );
});
angular.module('posts', []);
angular.module('posts').controller('postsIr', function ($scope, $http){
  $http.get('https://api-fake-blog.herokuapp.com/postagens').
      success(function(data) {
          $scope.publicacoes = data[localStorage.getItem("linha")];
      }
  );
});
