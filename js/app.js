window.addEventListener('load', () => {
  // elemento de DOM : boton de redirección:
  let btnHome = document.querySelector('.btn-home-js');
  // agregando evento click al botón:
  btnHome.addEventListener('click', () => {
    // redireccionando a vista home :
    window.location.href = 'views/home.html';
  });
});
