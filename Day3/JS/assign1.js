console.log("Even or odd");

function evenOrOdd(num) {
    num = Number(prompt("Enter your number"));

if (num % 2 == 0) {

        console.log(`The Number entered ${num} and Number is Even`);
    }
    else {
        console.log(`The Number entered ${num} and Number is Odd`);
    }


}
evenOrOdd();