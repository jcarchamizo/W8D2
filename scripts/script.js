function showMessage(km) {
  const message = document.getElementById('message');
  const close = document.getElementById('close');

  let text = "";
  let image = "";

  switch(km) {
    case 100:
      text = "Arrancamos!";
      image = "https://via.placeholder.com/300x200?text=Salida";
      break;
    case 50:
      text = "¡Ya vamos por la mitad!";
      image = "https://via.placeholder.com/300x200?text=Mitad+del+camino";
      break;
    case 15:
      text = "¡Ya casi estamos!";
      image = "https://via.placeholder.com/300x200?text=Cerca+del+destino";
      break;
    case 0:
      text = "¡Llegamos! ¡Vivan las vacaciones!";
      image = "https://via.placeholder.com/300x200?text=Tarragona+🌴";
      close.style.display = "block";
      break;
  }

  message.innerHTML = `<h2>${text}</h2><img src="${image}" alt="Paisaje">`;
}

function closeAll() {
  document.body.innerHTML = ''; // Delete all content
  const finalDiv = document.getElementById('final');
  finalDiv.style.display = 'block';
  document.body.appendChild(finalDiv); // Add final image
  document.body.style.backgroundImage = "url('https://via.placeholder.com/1920x1080?text=%C2%A1Vacaciones+en+Tarragona!')";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
}
