document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir el envío del formulario para manejar la validación por JavaScript

  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const ticketType = document.getElementById('ticketType').value; // Recuperar el tipo de boleto

  if (!fullName || !email || !phone || !ticketType) { // Comprobar si el campo del tipo de boleto está vacío
    alert('Por favor, completa todos los campos.');
  } else if (!isValidEmail(email)) {
    alert('Por favor, introduce un correo electrónico válido.');
  } else {
    // Si la validación pasa, mostrar detalles de compra y mensaje de agradecimiento
    const purchaseDetails = document.getElementById('purchaseDetails');
    purchaseDetails.innerHTML = `
      <h2>Detalles de Compra</h2>
      <p><strong>Nombre:</strong> ${fullName}</p>
      <p><strong>Correo Electrónico:</strong> ${email}</p>
      <p><strong>Número de Teléfono:</strong> ${phone}</p>
      <p><strong>Tipo de Boleto:</strong> ${ticketType}</p>
      <p>¡Gracias por tu compra!</p>
    `;
  }
});

function isValidEmail(email) {
  // Expresión regular para validar el formato del correo electrónico
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir el envío del formulario para manejar la validación por JavaScript

  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const ticketType = document.getElementById('ticketType').value; // Recuperar el tipo de boleto

  if (!fullName || !email || !phone || !ticketType) { // Comprobar si algún campo está vacío
    alert('Por favor, completa todos los campos.'); // Mostrar alerta si algún campo está vacío
  } else if (!isValidEmail(email)) { // Comprobar si el correo electrónico tiene un formato válido
    alert('Por favor, introduce un correo electrónico válido.'); // Mostrar alerta si el correo electrónico no es válido
  } else {
    // Si la validación pasa, mostrar detalles de compra y mensaje de agradecimiento
    const purchaseDetails = document.getElementById('purchaseDetails');
    purchaseDetails.innerHTML = `
      <h2>Detalles de Compra</h2>
      <p><strong>Nombre:</strong> ${fullName}</p>
      <p><strong>Correo Electrónico:</strong> ${email}</p>
      <p><strong>Número de Teléfono:</strong> ${phone}</p>
      <p><strong>Tipo de Boleto:</strong> ${ticketType}</p>
      <p>¡Gracias por tu compra!</p>
    `;
  }
});

function isValidEmail(email) {
  // Expresión regular para validar el formato del correo electrónico
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
