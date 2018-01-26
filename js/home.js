window.addEventListener('load', () => {
  // elementos del dom vista home:
  let textArea = document.querySelector('.text-area-js');
  let buttonCipher = document.querySelector('.cipher-js');
  let buttonDecipher = document.querySelector('.decipher-js');
  let originalText = document.querySelector('.original-text-js');
  let result = document.querySelector('.result-js');

  // variables relacionadas a las funciones:
  let pattern = /[a-zA-Z]/;
  let spacesToRun = 33;

  // agregando evento click al botón cipher:
  buttonCipher.addEventListener('click', () => {
    // tomando el texto ingresado para validarlo y posteriormente cifrarlo:
    let string = textArea.value;
    // comprobando que el campo ingresado sea texto y no esté vacío:
    if (string && pattern.test(string)) {
      // ejecutando función cipher:
      cipher(string);
      // reiniciando el textarea para próximas transformaciones de la variable string:
      textArea.value = '';
    } else {
      alert('Ingrese una cadena de texto');
    }
  });

  // agregando evento click al botón decipher:
  buttonDecipher.addEventListener('click', () => {
    // tomando el texto ingresado para validarlo y posteriormente decifrarlo:
    let string = textArea.value;
    // validando el texto ingresado:
    if (string && pattern.test(string)) {
      // ejecutando función decipher:
      decipher(string);
      // reiniciando el textArea:
      textArea.value = '';
    } else {
      alert('Ingrese una cadena de texto');
    }
  });

  // desarrollando función cipher :
  const cipher = (string) => {
    // contendrá el string cifrado :
    let stringCipher = '';
    // variable temporal : pertenece a la fórmula de cifrado :
    let temp = 0;
    // variable temporal : contiene un carácter del string cifrado :
    let letterCipher = '';
    // iterando en cada uno de los caracteres del string ingresado :
    for (let i = 0; i < string.length; i++) {
      // si es un caracter en mayúscula:
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        temp = (string.charCodeAt(i) - 65 + spacesToRun) % 26 + 65;
        letterCipher = String.fromCharCode(temp);
        stringCipher += letterCipher;
        // si es un caracter en minúscula :
      } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
        temp = (string.charCodeAt(i) - 97 + spacesToRun) % 26 + 97;
        letterCipher = String.fromCharCode(temp);
        stringCipher += letterCipher;
        // si es un espacio en blanco :
      } else if (string.charCodeAt(i) === 32) {
        temp = ' ';
        stringCipher += temp;
      }
    }
    // agregando string original al dom:
    originalText.textContent = string;
    // agregando string cifrado al dom:
    result.textContent = stringCipher;
  };

  // desarrollando función decipher:
  const decipher = (string) => {
    // contendrá el string descifrado:
    let stringDecipher = '';
    // variable temporal : pertenece a la fórmula de descifrado:
    let temp = 0;
    // variable temporal : contiene un carácter del string descifrado :
    let letterDecipher = '';
    // elemento del DOM: subtitulo mensaje cifrado
    let span = document.querySelector('.span-decipher-js');
    // iterando en cada uno de los caracteres del string ingresado :
    for (let i = 0; i < string.length; i++) {
      // si es un caracter en mayúscula:
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        temp = (string.charCodeAt(i) + 65 - spacesToRun) % 26 + 65;
        letterDecipher = String.fromCharCode(temp);
        stringDecipher += letterDecipher;
        // si es un caracter en minúscula :
      } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
        temp = (string.charCodeAt(i) + 97 + spacesToRun) % 26 + 97;
        letterDecipher = String.fromCharCode(temp);
        stringDecipher += letterDecipher;
        // si es un espacio en blanco :
      } else if (string.charCodeAt(i) === 32) {
        temp = ' ';
        stringDecipher += temp;
      }
    }
    // cambia subtitulo:
    span.textContent = 'Mensaje descifrado';
    // agregando string original al dom:
    originalText.textContent = string;
    // agregando string descifrado al dom:
    result.textContent = stringDecipher;
  };
});
