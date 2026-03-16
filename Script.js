let carrito = [];

function agregarAlCarrito(nombre, precio) {
  carrito.push({nombre, precio});
  mostrarCarrito();
}

function mostrarCarrito() {
  const lista = document.getElementById('lista-carrito');
  lista.innerHTML = '';
  let total = 0;
  carrito.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.nombre} - $${item.precio}`;
    lista.appendChild(li);
    total += item.precio;
  });
  document.getElementById('total').textContent = total;
}
let carrito = [];

function agregarAlCarrito(nombre, precio) {
  carrito.push({nombre, precio});
  mostrarCarrito();
}

function mostrarCarrito() {
  const lista = document.getElementById('lista-carrito');
  lista.innerHTML = '';
  let total = 0;
  carrito.forEach((item, i) => {
    const li = document.createElement('li');
    li.textContent = `${item.nombre} - $${item.precio}`;
    const btn = document.createElement('button');
    btn.textContent = "Eliminar";
    btn.onclick = () => eliminarDelCarrito(i);
    li.appendChild(btn);
    lista.appendChild(li);
    total += item.precio;
  });
  document.getElementById('total').textContent = total;
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  mostrarCarrito();
}

function vaciarCarrito() {
  carrito = [];
  mostrarCarrito();
}

/* PayPal integración básica */
paypal.Buttons({
  createOrder: function(data, actions) {
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: document.getElementById('total').textContent
        }
      }]
    });
  },
  onApprove: function(data, actions) {
    return actions.order.capture().then(function(details) {
      alert('Pago realizado por ' + details.payer.name.given_name);
      vaciarCarrito();
    });
  }
}).render('#paypal-button-container');
