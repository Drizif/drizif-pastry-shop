const products = [
  {
    id: 'Cheesecake',
    name: 'Cheesecake',
    lbl: 'CheesecakeLbl',
    price: 199.99,
  },
  {
    id: 'Tiramisu',
    name: 'Tiramisú',
    lbl: 'TiramisuLbl',
    price: 249.99,
  },
  {
    id: 'TresLeches',
    name: 'Tres Leches',
    lbl: 'TresLechesLbl',
    price: 299.99,
  },
  {
    id: 'ChocoFlan',
    name: 'Choco Flan',
    lbl: 'ChocoFlanLbl',
    price: 149.99,
  },
  {
    id: 'Opera',
    name: 'Ópera',
    lbl: 'OperaLbl',
    price: 349.99,
  },
  {
    id: 'TartaSantiago',
    name: 'Tarta de Santiago',
    lbl: 'TartaSantiagoLbl',
    price: 249.99,
  },
  {
    id: 'Globos',
    name: 'Globos',
    lbl: 'GlobosLbl',
    price: 19.99,
  },
  {
    id: 'Aniversario',
    name: 'Aniversario',
    lbl: 'AniversarioLbl',
    price: 9.99,
  },
  {
    id: 'Cumpleaños',
    name: 'Cumpleaños',
    lbl: 'CumpleañosLbl',
    price: 9.99,
  },
];


const getRndNum = (min, max) => Math.round(Math.random() * (max - min) + min);

function changeUrl() {
  const description = JSON.parse(localStorage.getItem('products'));
  if (description.data.length > 0) document.location.href = './facturacion.html'
}



function setTotal() {
  let total = 0;
  const descriptions = {
    data: [],
  };

  products.forEach((product, i) => {
    const value = document.getElementById(`${product.id}`).value;
    total += (product.price * parseInt(value));

    if (value > 0) {
      const desc = document.getElementById(`description${i}`);
      descriptions.data.push(
        {
          name: product.name,
          description: desc.innerText,
          quantity: parseInt(value)
        }
      );
    }
  });
  descriptions.total = total;
  localStorage.setItem('products', '');
  localStorage.setItem('products', JSON.stringify(descriptions));

  if (total > 0) {
    const modal = document.getElementById('price');
    modal.textContent = `$${total.toFixed(2)} MXN`;
  }
}

(() => {
  let total = 0;
  products.forEach(product => {
    const productElement = document.getElementById(`${product.lbl}`);
    const rNumber = getRndNum(0, 300);
    if (productElement) productElement.append(` restantes: ${rNumber}`);
    total += rNumber;
  });
})();