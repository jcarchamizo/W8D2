function showMessage(km) {
  const message = document.getElementById('message');
  const close = document.getElementById('close');

  let text = "";
  let image = "";

  switch(km) {
    case 100:
      texto = "Arrancamos!";
      imagen = "https://via.placeholder.com/300x200?text=Salida";
      break;
    case 50:
      texto = "¡Ya vamos por la mitad!";
      imagen = "https://via.placeholder.com/300x200?text=Mitad+del+camino";
      break;
    case 15:
      texto = "¡Ya casi estamos!";
      imagen = "https://via.placeholder.com/300x200?text=Cerca+del+destino";
      break;
    case 0:
      texto = "¡Llegamos! ¡Vivan las vacaciones!";
      imagen = "https://via.placeholder.com/300x200?text=Tarragona+🌴";
      cerrar.style.display = "block";
      break;
  }

  mensaje.innerHTML = `<h2>${texto}</h2><img src="${imagen}" alt="Paisaje">`;
}

function cerrarTodo() {
  document.body.innerHTML = ''; // Elimina todo el contenido
  const finalDiv = document.getElementById('final');
  finalDiv.style.display = 'block';
  document.body.appendChild(finalDiv); // Añade imagen final
  document.body.style.backgroundImage = "url('https://via.placeholder.com/1920x1080?text=%C2%A1Vacaciones+en+Tarragona!')";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
}
