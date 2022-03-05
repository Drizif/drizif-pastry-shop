(function () {
  'use strict'

  var forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
        if (form.checkValidity()) {
          const products = JSON.parse(localStorage.getItem("products")) || [];
          let requests = JSON.parse(localStorage.getItem("requests")) || [];
          console.log(requests);

          requests.push({
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            address: document.getElementById('address').value,
            tel: document.getElementById('tel').value,
            cardName: document.getElementById('cc-name').value,
            cardNumber: document.getElementById('cc-number').value,
            expiration: document.getElementById('cc-expiration').value,
            products
          });

          localStorage.setItem('requests', JSON.stringify(requests));
          document.location.href = './index.html';
        }
      }, false)
    })
})()
