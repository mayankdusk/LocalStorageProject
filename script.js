let texta = document.getElementById("texta");
texta.addEventListener("input", addTOLocalStorage);

function addTOLocalStorage() {
  localStorage.setItem("savedItem", texta.value);
}

if (localStorage.getItem("savedItem")) {
  texta.value = localStorage.getItem("savedItem");
}
