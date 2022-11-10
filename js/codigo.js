let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

function validar() {
  var nombre = document.miForm.nom.value.trim();
  if (!nombre) {
    alert("Ud debe ingresar un nombre");
    document.miForm.nom.focus();
    return false;
  } else {
    if (nombre.length < 3) {
      alert("El nombre debe tener mas de tres letras");
      document.miForm.nom.focus();
      return false;
    }
  }
  var mail = document.miForm.ema.value;
  var patronmail = /^[a-z0-9_\-\.]+@\w+(\.\w{2,3})+$/;
  if (!mail) {
    alert("No ha ingresado ningun email");
    document.miForm.ema.focus();
    return false;
  } else {
    if (!patronmail.test(mail)) {
      alert("El email tiene un formato incorrecto");
      document.miForm.ema.focus();
      return false;
    }
  }

  var edad = document.miForm.eda.value;
  if (!Number.parseInt(edad)) {
    alert("Ingrese una edad válida!");
    document.miForm.eda.focus();
    return false;
  } else {
    if (edad < 18 || edad > 120) {
      alert("La edad debe estar entre 18 y 120 años");
      document.miForm.eda.focus();
      return false;
    }
  }

  var ciudad = document.miForm.ciu.selectedIndex;
  if (ciudad == 0) {
    alert("Debe seleccionar al menos una ciudad");
    document.miForm.ciu.focus();
    return false;
  }

  var mensaje = document.miForm.men.value.trim();
  if (!mensaje) {
    alert("Ud debe ingresar un comentario");
    document.miForm.men.focus();
    return false;
  } else {
    if (mensaje.length < 3) {
      alert("El comentario debe ser mas largo");
      document.miForm.men.focus();
      return false;
    }
  }
  if (confirm("Esta seguro?")) {
    return true;
  }
  return false;
}

