app.controller('logInCtrl', ($scope, toastr, $http, $window) => {
  $scope.submit = () => {
    const credential = { email: $scope.email, password: $scope.password };
    $http.post('/users/verify', credential)
      .then(response => {
        if (response.data) {
          toastr.success('Bienvenido', 'Éxito');
          $window.location.href = '/dashboard';
        } else {
          toastr.error('Usuario o contraseña incorrecta', 'Error');
        }
      },
        () => toastr.warning('Servicio no disponible', 'Precaución')
      );
  };
});
