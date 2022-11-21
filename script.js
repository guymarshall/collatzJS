let collatz = input => {
    let counter = BigInt("0");
    while (input.comparedTo(BigInt("0")) > 0) {
        counter = counter.plus(BigInt("1"));
        if (input.modulo(BigInt("2")).isEqualTo(BigInt("0"))) {
            input = input.dividedBy(BigInt("2"));
        } else {
            input = input.multiply(BigInt("3")).plus(BigInt("1")).divideBy(BigInt("2"));
        }
    }

    return counter;
};

//? Java code to convert
/*
static NumberFormat formatter = new DecimalFormat("0.######E0", DecimalFormatSymbols.getInstance(Locale.ROOT));
public static BigInteger collatz(BigInteger number) {
    BigInteger counter = BigInteger.ZERO;
    while (number.compareTo(BigInteger.ONE) > 0) {
        counter = counter.add(BigInteger.ONE);
        if (number.mod(BigInteger.TWO).equals(BigInteger.ZERO)) {
            number = number.divide(BigInteger.TWO);
        } else {
            number = number.multiply(BigInteger.valueOf(3)).add(BigInteger.ONE).divide(BigInteger.TWO);
        }
    }

    return counter;
}

public static void main(String[] args) {
    BigInteger userInput = BigInteger.valueOf(2).pow(200000).subtract(BigInteger.ONE);
    // 9.980052E60205 had 1728481 steps

    String resultFormatted = formatter.format(userInput);
    System.out.printf("%s had %d steps%n", resultFormatted, collatz(userInput));
}
*/

//? Code to interact with HTML
/*
let linebreakHTML = '<br>';

document.getElementById('button').addEventListener('click', function() {
  let number = document.getElementById('number').value;
  let resultDiv = document.getElementById('result');
  resultDiv.innerHTML= '';

  while (number > 10) {
    let digits = splitStringIntoCharacters(number);
    let sum = 1;
    for (let i = 0; i < digits.length; i++) {
      sum *= Number(digits[i]);
    }
    number = sum.toString();
    resultDiv.innerHTML += number;
    resultDiv.innerHTML += linebreakHTML;  
  }
});

function splitStringIntoCharacters(input) {
  return input.split('');
}
*/