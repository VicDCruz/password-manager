app.controller('dashboardCtrl', ($scope, toastr, $http) => {
  $scope.show = (title, body) => {
    $scope.title = title;
    $scope.body = body;
  };

  $scope.submit = () => {
    const element = {
      'name': $scope.name,
      'username': $scope.username,
      'password': $scope.password,
      'link': $scope.link,
    };
    $http.post('/passwords/add', element)
      .then(response => {
        if (response.data) {
          toastr.success('Guardado con éxito', 'Éxito');
          $scope.passwords.push(element);
          $scope.name = '';
          $scope.username = '';
          $scope.password = '';
        } else {
          toastr.error('Error al guardar', 'Error');
        }
      },
        () => toastr.warning('Servicio no disponible', 'Precaución')
      );
  };

  $scope.search = () => {
    $scope.passwordsFiltered = $scope.passwords.filter(password =>
      password.name.toUpperCase().includes($scope.keyword.toUpperCase())
    );
    $scope.title = 'Elementos encontrados';
  };

  $scope.generatePassword = () => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var output = '';
    for (var i = 0, n = charset.length; i < $scope.pwdLength; ++i) {
      output += charset.charAt(Math.floor(Math.random() * n));
    }
    $scope.password = output;
  };

  $scope.getDomain = () => {
    const elements = $scope.link.split('.');
    if (elements.length > 1) {
      let name = elements[1];
      name = setCharAt(name, 0, name[0].toUpperCase());
      $scope.name = name;
    } else {
      $scope.name = '';
    }
  };

});

function setCharAt(str, index, chr) {
  if (index > str.length - 1) {
    return str;
  }
  return str.substr(0, index) + chr + str.substr(index + 1);
}
