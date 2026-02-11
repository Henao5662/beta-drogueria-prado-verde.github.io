// WhatsApp opciones
function toggleWA(){

  const box =
  document.getElementById("waOptions");

  if(box.style.display==="flex"){
    box.style.display="none";
  }else{
    box.style.display="flex";
  }

}

// Menú hamburguesa
function toggleMenu(){

  const menu =
  document.getElementById("menu");

  menu.classList.toggle("active");

}
