const tableTemplate = (id, name, email, tel, products, total) => {
  const clientInfo = `
    <tr>
    <td>${id}</td>
    <td>${name}</td>
    <td>${email}</td>
    <td>${tel}</td>
    <td>
      <ul class="list-group list-group ">
  `;

  const clientProducts = products.map(e => (`\t\t<li class="list-group-item d-flex justify-content-between align-items-start pedidos pedidos">
          <div class="ms-2 me-auto">
            <div class="fw-bold">${e.name}</div>
          </div>
          <span class="badge  rounded-pill">${e.quantity}</span>
        </li>
  `)).join('\n') + `\t\t<li class="list-group-item d-flex justify-content-between align-items-start pedidos pedidos">
          <div class="ms-2">
            <div class="row">
              <div class="col">
                <div class="fw-bold">Total:</div>
              </div>
              <div class="col total">
              $${total.toFixed('2')} MXN
              </div>
            </div>            
          </div>
        </li>
  `+ '\t  </ul>\n\t</td>';

  return (clientInfo + clientProducts);
}

(() => {
  const requests = JSON.parse(localStorage.getItem('requests')) || [];
  const table = document.getElementById('table');
  if (Array.isArray(requests) && requests.length > 0) {
    const content = requests.map((req, i) => (tableTemplate(i, req.firstName + ' ' + req.lastName, req.email, req.tel, req.products.data, req.products.total))).join('\n');
    table.innerHTML += content;
  }
})();