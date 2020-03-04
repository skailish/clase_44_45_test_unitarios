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