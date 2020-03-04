/**
 * @name toCamelCase
 * @description Convierte un string en dash-case a camelCase
 *
 * @param {string} str - El string en dash-case a convertir
 * @returns {String} El string en camelCase convertido
 *
 * @example
 *  toCamelCase('javascript-es-raro') // returns 'javascriptEsRaro'
 */

const toCamelCase = str => {
    let textoEditado = str.slice();
    // borro los posibles espacios
    textoEditado = textoEditado.replace(/ /g, "");

    // loop para poner mayúscula a la letra después del -
    for (let i = 0; i < textoEditado.length; i++) {
        if (textoEditado[i] === "-") {
            if (textoEditado[i + 1] !== undefined) {
                textoEditado[i + 1] = textoEditado[i + 1].toUpperCase();
            }
        }
    }


    // borro los guiones
    textoEditado = textoEditado.replace(/-/g, "");

    return textoEditado;

}



/**
 * @name getShortestWords
 * @description Obtiene la(s) palabra(s) más corta(s) de un string
 *
 * @param {string} text - El texto del que se desea obtener las palabras
 * @returns {String[]} Array de palabra(s) más cortas de {text}
 *
 * @example
 *  getShortestWords('no sé por qué no funciona') // returns ['no', 'sé']
 */

const getShortestWords = texto => {
    const copia = texto.slice();
    const arrayDeTexto = copia.split(" "); // convierto el string a array
    let contador = 9999999;
    let palabrasMasCortas = [];
    for (let i = 0; i < arrayDeTexto.length; i++) {
        if (arrayDeTexto[i].length < contador) {
            contador = arrayDeTexto[i].length;
            palabrasMasCortas.push(arrayDeTexto[i]);
            if (palabrasMasCortas[0].length !== contador) {
                palabrasMasCortas.shift();
            }
        }
    }
    return palabrasMasCortas;
}



/**
 * @name getTallestSkyscrapper
 * @description Dado un array 2D donde los 1 representan edificios (dispuestos verticalmente), devuelve la altura del edificio
 * más alto (cantidad de 1s)
 *
 * @param {number[][]} skyline - Representación de la vista de edificios de una ciudad, donde 1s son edificios y 0 el resto  *
 * (cielo)
 * @returns {Number} La altura del edificio más alto
 *
 * @example
 *  getTallestSkyscrapper([
 *    [0, 0, 0, 0],
 *    [0, 1, 0, 0],
 *    [0, 1, 1, 0],
 *    [1, 1, 1, 1]
 *  ]) // returns 3
 */

const getTallestSkyscrapper = (array2D) => {
    const copy = array2D.slice();
    const length = copy.length;

    let tallestSkyscrapper = 0;

    for (let i = 0; i < copy[0].length; i++) {
        let contador = 0
        if (copy[length - 1][i] === 1) {

            for (let j = 0; j < copy.length; j++) {
                if (copy[j][i] === 1)
                    contador++
            }
        }

        if (tallestSkyscrapper < contador) {
            tallestSkyscrapper = contador;
        }
    }

    return tallestSkyscrapper
}

/**
 * @name getTicTacToeResult
 * @description Dado un array 2D que represente una partida de Ta-Te-Ti, debe devolver un string indicando el resultado,
 * siendo 'X', 'O' si ganó alguno de ellos respectivamente, o empate
 *
 * @param {string[][]} board - Representación de un tablero de Ta-Te-Ti, usando 'X', 'O' para jugadas de cada jugador y 'E'
 * para un espacio vacío
 * @returns {String} Resultado de la partidad, siendo 'X' u 'O' si ganó alguno de ellos respectivamente, o 'Draw' (empate) si
 * ninguno lo hizo
 *
 * @example
 *   getTicTacToeResult([
 *     ['O', 'O', 'O'],
 *     ['O', 'X', 'X'],
 *     ['E', 'X', 'X']
 *   ]) ➞ returns 'O'
 */

const getTicTacToeResult = array2D => {
    const copy = array2D.slice();
    let result = "";

    for (let i = 0; i < copy.length; i++) {

        // horizontales
        if (copy[i][0] === copy[i][1] && copy[i][0] === copy[i][2]) {
            result = copy[i][0];
        }

        for (let j = 0; j < copy[i].length; j++) {
            // verticales
            if (copy[0][j] === copy[1][j] && copy[0][j] === copy[2][j]) {
                result = copy[0][j];
            }
        }
    }

    // diagonales
    if (copy[0][0] === copy[1][1] && copy[0][0] === copy[2][2]) {
        result = copy[0][0];
    }

    if (copy[2][0] === copy[1][1] && copy[2][0] === copy[0][2]) {
        result = copy[2][0];
    }

    return result;
}

/**
 * @name uncensor
 * @description Dado un texto censurado y una lista de letras en orden recupera el texto censurado reemplazando cada letra
 * censurada por su correspondiente
 *
 * @param {string} censoredText - El texto censurado a recuperar. Las letras censuradas se representan con *
 * @param {string[]} censoredLetters - Letras censuradas en orden a como corresponde al {censoredText}
 * @returns {string} El texto sin censurar
 *
 * @example
 *  uncensor('*di* Ja**Scr*p*', ['O', 'o', 'v', 'a', 'i', 't']) // returns 'Odio JavaScript'
 */

const uncensor = (censoredText, censoredLetters) => {
    const letters = censoredLetters.slice();
    let uncensoredTextArray = censoredText.split("*"); // ["", "di", " Ja", "", "Scr", "p", ""]
    let uncensoredText = "";
    let j = 0;
    for (let i = 0; i < uncensoredTextArray.length; i++) {
        if (j < letters.length) {
            uncensoredTextArray[i] += letters[j];
            uncensoredText += uncensoredTextArray[i]
            j++
        }
    }

    return uncensoredText
}

/**
 * @name isPalindrome
 * @description Chequea si un string es palíndromo (capicúa), es decir, si puede ser leído de igual manera de izquierda a
 * derecha como de derecha a izquierda (ignorando espacios)
 *
 * @param {string} text - El texto que se desea verificar
 * @returns {Boolean} Devuelve true si {text} es palíndromo, false sino
 *
 * @example
 *  isPalindrome('Arriba la birra') // returns true
 */


const isPalindrom = text => {
    let copyText = text.toLowerCase();
    copyText = copyText.replace(/ /g, "");
    copyText = copyText.replace(/,/g, "");

    // elimino acentos
    copyText = copyText.replace(/á/gi, "a");
    copyText = copyText.replace(/é/gi, "e");
    copyText = copyText.replace(/í/gi, "i");
    copyText = copyText.replace(/ó/gi, "o");
    copyText = copyText.replace(/ú/gi, "u");

    copyText = copyText.split("");

    let reversedText = copyText.slice();
    reversedText = reversedText.reverse();

    let isPalindrom = true;

    // comparación
    for (let i = 0; i < reversedText.length; i++) {
        if (copyText[i] != reversedText[i]) {
            isPalindrom = false;
        }

    }
    return isPalindrom
}


/**
 * @name getNextPalindrome
 * @description Devuelve el siguiente número palíndromo de un número x
 *
 * @param {number} x - Número del que sea desea obtener el siguiente palíndromo
 * @returns {Number} El siguiente palíndromo
 *
 * @example
 *  getNextPalindrome(103) // returns 111
 *
 */

const getNextPalindrome = number => {
    let continueLoop = true;
    let nextPalindrome = 0;
    const originalNumber = Number(number);
    let checkNumber = originalNumber + 1;
    while (continueLoop) {
        let unreversedNumber = String(checkNumber);
        unreversedNumber = unreversedNumber.split("");
        let reversedNumber = unreversedNumber.slice();
        reversedNumber = reversedNumber.reverse();

        let isPalindrom = true;
        // comparación

        for (let i = 0; i < reversedNumber.length; i++) {
            if (reversedNumber[i] != unreversedNumber[i]) {
                isPalindrom = false;
            }

        }

        if (isPalindrom === true) {
            nextPalindrome = checkNumber;
            continueLoop = false;
        }
        checkNumber++

    }

    return nextPalindrome

}