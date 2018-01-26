window.addEventListener('load', () => {
  let btnHome = document.querySelector('.btn-home-js');

  btnHome.addEventListener('click', () => {
    console.log('click');
    window.location.href = 'views/home.html';
  });
});
