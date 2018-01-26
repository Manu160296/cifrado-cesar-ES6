window.addEventListener('load', function() {
  var btnHome = document.querySelector('.btn-home-js');

  btnHome.addEventListener('click', function() {
    console.log('click');
    window.location.href = 'views/home.html';
  });
});
