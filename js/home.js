window.addEventListener('load', () => {
  // elementos del dom :
  let textArea = document.querySelector('.text-area-js');
  let buttonCipher = document.querySelector('.cipher-js');
  let buttonDecipher = document.querySelector('.decipher-js');
  let originalText = document.querySelector('.original-text-js');
  let result = document.querySelector('.result-js');

  // variables relacionadas a las funciones:
  let pattern = /[a-zA-Z]/;
  let spacesToRun = 33;

  buttonCipher.addEventListener('click', () => {
    let string = textArea.value;
    if (string && pattern.test(string)) {
      cipher(string);
      textArea.value = '';
    } else {
      alert('Ingrese una cadena de texto');
    }
  });

  buttonDecipher.addEventListener('click', () => {
    console.log('descifrar');
    let string = textArea.value;
    if (string && pattern.test(string)) {
      decipher(string);
      textArea.value = '';
    } else {
      alert('Ingrese una cadena de texto');
    }
  });

  const cipher = (string) => {
    let stringCipher = '';
    let temp = 0;
    let letterCipher = '';

    for (let i = 0; i < string.length; i++) {
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
  };

  const decipher = (string) => {
    let stringDecipher = '';
    let temp = 0;
    let letterDecipher = '';
    let span = document.querySelector('.span-decipher-js');
    let spacesToRun = 33;

    for (let i = 0; i < string.length; i++) {
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
  };
});
