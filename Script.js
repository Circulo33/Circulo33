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
