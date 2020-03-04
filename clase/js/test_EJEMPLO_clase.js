mocha.setup("bdd") // Inicializar los test
const expect = chai.expect // Abreviar expect

// TEST
// * LO MÁS REDUCIDO POSIBLE
// * NO PUEDE TENER NADA DE LÓGICA (BUCLES, CONDICIONALES, OPERACIONES, ETC)
//  - Crear variables
//  - Llamar a funciones que devuelvan valores para asignarlos a variables
// * TESTEAR UNA ÚNICA COSA (lo más atómico posible)
// * BIEN DESCRIPTIVOS: QUÉ SE ESPERA SEGÚN QUÉ SE INGRESA
// * INDEPENDIENTES: LO QUE SE HAGA EN UN TEST, NO PUEDE AFECTAR LO QUE SE HAGA EN OTRO Y EL ORDEN DE LOS TESTS NO PUEDE AFECTAR AL RESULTADO


const sumar = (a, b) => a + b;

// Suite de test (conjunto de tests para una única cosa)
// 1er parámetro: nombre de lo que se quiere testear
// 2do parámetro: una función
// Testeamos una función
describe("sumar()", () => { // indica lo que se va a testear

    // === UNIT TEST, o test unitarios === //
    // 1er parámetro: una descripción del test
    // 2do parámetro: otra función
    it("Debería devolver la suma de dos números", () => { // los tests que hago
        expect(sumar(2, 3)).to.equal(5) // una afirmación, lo que esperamos que suceda. Se escribe como hablaríamos.
    })

})

mocha.run() // Correr los test


/// TDD - Test Driven Depelopment
// Práctica o filosofía que utiliza los tests para desarrollar programas
// 1* Hacer un test y verlo fallar (sobre lo que vamos a hacer y esperamos que devuelva)
// 2* Escribimos el primer código que haga al test pasar
// 3* Refactorizamos el código para mejorarlo (teniendo en cuenta que el test sigue teniendo que pasar)
// REGLA: MIENTAS UN TEST FALLE, NO SE ESCRIBE OTRO TEST
