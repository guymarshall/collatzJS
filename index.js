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