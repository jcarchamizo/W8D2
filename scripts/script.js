function showMessage(km) {
  const message = document.getElementById('message');
  const close = document.getElementById('close');

  let text = "";
  let image = "";

  switch(km) {
    case 100:
      text = "Let's get started!";
      image = "img/barcelona.jpg";
      break;
    case 50:
      text = "We're already halfway there!";
      image = "img/sitges.jpg";
      break;
    case 15:
      text = "We're almost there!";
      image = "img/altafulla.jpg";
      break;
    case 0:
      text = "We're here! Long live the holidays!";
      image = "img/tarragona.jpg";
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
  document.body.style.backgroundImage = "url('')";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
}
