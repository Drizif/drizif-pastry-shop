function login() {
  const user = document.getElementById('user').value;
  const pass = document.getElementById('pass').value;

  if (user == "pastelero" && pass == "1234") {
    localStorage.setItem('user', user);
    localStorage.setItem('pass', pass);
    document.location.href = './pedidos.html'
  } else {
    const alert = document.getElementById('alert');
    if (!alert) {
      const main = document.getElementById('main');
      main.innerHTML += `
      <div class="alert alert-danger" role="alert" id="alert">
        Usuario o contraseña incorrecta, todo bien pastelero o.O?
      </div>`
    } else {
      alert.innerHTML = `
      <div class="alert alert-danger" role="alert" id="alert">
        Usuario o contraseña incorrecta, todo bien pastelero o.O?
      </div>`
    }

  }
}