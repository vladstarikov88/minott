function ChineTheorem() {

}

function secretSeparate() {
    s.value

    /* массив длиной n */
    let ar = [];

    /* p из википедии */
    let seq = sequence(n);

    for(let i = 0; i < n; i++){
        ar[i] = S.modPow(1, seq[i])
    }

    console.log(ar)
}

function sequence(n){
    let numbers = numberList(4, n, k)

    return numbers;
}

/* последовательность миньота длиной n */
function numberList(p, n, m){
    let minotNumbers = [];
    minotNumbers.length = n

    p = new Number(2);

    while(p.plain(100)) {
        if(check(minotNumbers, p.n))
            minotNumbers.push(p.n)
        p.n++
    }

    let temp = p.n++
    while(!checkBlum(minotNumbers, n, m, p.n)){
        temp++;

        console.log(temp);
        let num = [];
        num.length = 10;
        num.push(p.n);
        for (let t = temp % 2 == 0 ? ++temp : temp; num.length < n; t += 2){
            if (check(num, t)) num.push(t);
        }
    }

    console.log(minotNumbers)
    return minotNumbers
}

function check(num, a) {
    a = new Number(a)
    for(let i = 0; i < num.length; i++) {
        if(!a.plain(25))
            return false
    }
    return true;
}




/*
бля, ну это полная хуета, а не код

состаить последовательность минета
*/



function getRandom(min, max){
    return Math.random() * (max - min) + min;
}


function buildPlain(){
    let plain = []
    for(let i = 2; i < 200; i++) {
        if(check(i)){
            plain.push(i)
        }
    }

    return plain;
}