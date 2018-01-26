window.addEventListener('load', function() {
  var textArea = document.querySelector('.text-area-js');
  var buttonCipher = document.querySelector('.cipher-js');
  var buttonDecipher = document.querySelector('.decipher-js');
  var originalText = document.querySelector('.original-text-js');
  var result = document.querySelector('.result-js');

  // variables relacionadas a las funciones:
  var pattern = /[a-zA-Z]/;
  var spacesToRun = 33;

  buttonCipher.addEventListener('click', function() {
    var string = textArea.value;
    if (string && pattern.test(string)) {
      cipher(string);
      textArea.value = '';
    } else {
      alert('Ingrese una cadena de texto');
    }
  });

  buttonDecipher.addEventListener('click', function() {
    console.log('descifrar');
    var string = textArea.value;
    if (string && pattern.test(string)) {
      decipher(string);
      textArea.value = '';
    } else {
      alert('Ingrese una cadena de texto');
    }
  });

  function cipher(string) {
    var stringCipher = '';
    var temp = 0;
    var letterCipher = '';

    for (var i = 0; i < string.length; i++) {
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        temp = (string.charCodeAt(i) - 65 + spacesToRun) % 26 + 65;
        letterCipher = String.fromCharCode(temp);
        stringCipher += letterCipher;
      } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
        temp = (string.charCodeAt(i) - 97 + spacesToRun) % 26 + 97;
        letterCipher = String.fromCharCode(temp);
        stringCipher += letterCipher;
      } else if (string.charCodeAt(i) === 32) {
        temp = ' ';
        stringCipher += temp;
      }
    }
    originalText.textContent = string;
    result.textContent = stringCipher;
  }

  function decipher(string) {
    var stringDecipher = '';
    var temp = 0;
    var letterDecipher = '';
    var span = document.querySelector('.span-decipher-js');
    var spacesToRun = 33;

    for (var i = 0; i < string.length; i++) {
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        temp = (string.charCodeAt(i) + 65 - spacesToRun) % 26 + 65;
        letterDecipher = String.fromCharCode(temp);
        stringDecipher += letterDecipher;
      } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
        temp = (string.charCodeAt(i) + 97 + spacesToRun) % 26 + 97;
        letterDecipher = String.fromCharCode(temp);
        stringDecipher += letterDecipher;
      } else if (string.charCodeAt(i) === 32) {
        temp = ' ';
        stringDecipher += temp;
      }
    }
    span.textContent = 'Mensaje descifrado';
    originalText.textContent = string;
    result.textContent = stringDecipher;
  }
});
