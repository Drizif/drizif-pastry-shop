(() => {
  const user = localStorage.getItem('user');
  const pass = localStorage.getItem('pass');

  if (user == "pastelero" && pass == "1234") {
    const login = document.getElementById('login');
    login.innerHTML =""
    login.innerHTML= '<h5><a class="nav-link" id="login" href="./pedidos.html">Pedidos</a></h5>'
  }
})();