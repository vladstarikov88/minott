"use strict";

/* разделить */
separate.addEventListener("click", function(){
    secretSeparate();
});

/* собрать */
assemble.addEventListener("click", function(){
    assemble();
});


/*  */

function secretSeparate() {
    s.value
    let ar = [];                        /* массив длиной n */
    let seq = sequenceMinot(n.value, k.value);   /* p из википедии */

    /*for(let i = 0; i < n; i++){
        ar[i] = S.modPow(1, seq[i])
    }*/

}

function sequenceMinot(n, k) {
    let res = checkSequence(n, k)
    console.log(res)
}

function checkSequence(n, k) {
    let left
    let right
    let arr

    let compare = false;
    let iteration = 0;
    let del = false;
    while(!compare){
        arr = buildPlain(+n, iteration)

        left = arr.slice(0, k)
        let s = k-1
        right = arr.slice(-s)

        compare =  multiple(left) < multiple(right) ? false : true;
        console.log(left)
        console.log(right)
        console.log('compare: ' + compare)
        console.log('arr: ' + arr)
        iteration++
        if(iteration > 10) {
            console.error('error')
            console.log(arr)
            return false
        }
    }

    console.log(compare)
    console.log(arr)
    console.log(left)
    console.log(right)
}

function multiple(arr) {
    return arr.reduce(function(mul, current){
        return mul * current
    }, 1)
}