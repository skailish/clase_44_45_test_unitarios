mocha.setup("bdd") // Inicializar los test
const expect = chai.expect // Abreviar expect


// toCamelCase()
describe("toCamelCase()", () => {
    it("Debería eliminar los guiones", () => {
        const texto = "Oración con - - -"
        const resultado = toCamelCase(texto);

        expect(resultado.includes("-")).to.be.false
    })
    it("Debería eliminar los espacios", () => {
        const texto = "Oración con - - -"
        const resultado = toCamelCase(texto);

        expect(resultado.includes(" ")).to.be.false
    })

})


// getShortestWords()

describe("getShortestWords()", () => {
    it("Debería mantener el length del original", () => {
        const texto = "Hola cómo estás bien y vos qué tal";
        const copy = texto.slice();
        getShortestWords(texto);

        expect(texto.length).to.be.equal(copy.length)
    });


})

// getTallestSkyscraper
describe("getTallestSkyscrapper()", () => {
    it("Debería mantener el length del original", () => {
        const array = [[0, 0, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1]];
        const copy = array.slice();
        getTallestSkyscrapper(copy);

        expect(array.length).to.be.equal(copy.length)
    });
    it("Debería devolver un número", () => {
        const array = [[0, 0, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1]];
        const tallestSkyscrapper = getTallestSkyscrapper(array);

        expect(tallestSkyscrapper).to.not.be.NaN
    });
    it("Debería devolver el edificio más alto", () => {
        const array = [[0, 0, 1, 0], [0, 0, 1, 1], [0, 0, 1, 1], [0, 1, 1, 1], [0, 1, 1, 1]];
        const tallestSkyscrapper = getTallestSkyscrapper(array);

        expect(tallestSkyscrapper).to.be.equal(5);
    });


})


// getTicTacToeResult
describe("getTicTacToeResult()", () => {
    it("Debería mantener el length del original", () => {
        const array = [['O', 'O', 'O'], ['O', 'X', 'X'], ['E', 'X', 'X']];
        const copy = array.slice();
        getTicTacToeResult(copy);

        expect(array.length).to.be.equal(copy.length)
    });

    it("Debería mostrar al ganador", () => {
        const array = [['X', 'O', 'O'], ['O', 'X', 'O'], ['E', 'X', 'O']];
        const copy = array.slice();
        const result = getTicTacToeResult(copy);

        expect(result).to.be.equal("O")
    });


})


// uncensor
describe("uncensor()", () => {
    it("Debería mantener el length del original", () => {
        const censoredText = '*di* Ja**Scr*p*';
        const censoredLetters = ['O', 'o', 'v', 'a', 'i', 't'];
        const copy = censoredText.slice();
        uncensor(copy, censoredLetters);

        expect(censoredText.length).to.be.equal(copy.length)
    });

    it("Debería eliminar los '*'", () => {
        const censoredText = '*di* Ja**Scr*p*';
        const censoredLetters = ['O', 'o', 'v', 'a', 'i', 't'];
        let uncensoredText = uncensor(censoredText, censoredLetters);

        expect(uncensoredText.includes("*")).to.be.false
    });

})

// isPalindrom
describe("isPalindrom()", () => {
    it("Debería mantener el length del original", () => {
        const text = 'Adios';
        const copy = text.slice();
        isPalindrom(text);

        expect(text.length).to.be.equal(copy.length)
    });
    it("Debería chequear si es palíndromo", () => {
        const text = 'AdiosA';
        const text2 = 'Adivina ya te opina, ya ni miles origina, ya ni cetro me domina, ya ni monarcas, a repaso ni mulato carreta, acaso nicotina, ya ni cita vecino, anima cocina, pedazo gallina, cedazo terso nos retoza de canilla goza, de pánico camina, ónice vaticina, ya ni tocino saca, a terracota luminosa pera, sacra nómina y ánimo de mortecina, ya ni giros elimina, ya ni poeta, ya ni vida'

        let result = isPalindrom(text);
        let result2 = isPalindrom(text2);

        expect(result).to.be.false
        expect(result2).to.be.true
    });
})

// nextPalindrom
describe("getNextPalindrome()", () => {
    it("Debería devolver un número", () => {
        result = getNextPalindrome(50);

        expect(result).to.be.finite
    });

    it("Debería devolver el siguiente palíndromo al numero dado", () => {
        result = getNextPalindrome(50);
        result2 = getNextPalindrome(100);
        result3 = getNextPalindrome(101);

        expect(result).to.equal(55)
        expect(result2).to.equal(101)
        expect(result3).to.equal(111)

    });

})

mocha.run() // Correr los test

