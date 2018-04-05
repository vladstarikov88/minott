function ChineTheorem() {

}

/*function sequence(n){
    let numbers = numberList(4, n, k)

    return numbers;
}*/

/* последовательность миньота длиной n */
/*function numberList(p, n, m){
    let minotNumbers = [];


    console.log(minotNumbers)
    return minotNumbers
}*/


function buildPlain(amount, iteration){
    let plain = []
    let i = 5;

    let del = false;

    if(iteration > 0){
        del = true
    }

    while(plain.length < amount) {
        if(check(i)){
            plain.push(i)
            if(plain.length > iteration +2) {
                if(del === true ) {
                    plain.splice(1, iteration)
                    del = false;
                }
            }
        }
        i++;
    }
    return plain;
}

function getRandom(min, max){
    return Math.random() * (max - min) + min;
}