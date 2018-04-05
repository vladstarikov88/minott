class Number{
    constructor(n) {
        this.n = n
    }

    plain(round) {
        let n = this.n;

        let fls = 0;
        let tr = 0;

        for(let i = 0; i < round; i++) {
            let a = Math.round(getRandom(2, n-1) );
            if(Math.pow(a, n-1) % n != 1)
                fls++;
            else
                tr++
        }

        /*console.log(fls, tr)*/
        return (tr > 0) ? true : false;
    }

    ferma(round) {
        let n = this.n;
        for(let i = 0; i < round; i++) {
            let a = Math.round(getRandom(2, n-2) );
            if(Math.pow(a, n-1) % n != 1)
                return false; // составное
        }
        return true // простое
    }

    millerRabinTest(round) {
        let n = this.n;
        for(let i = 0; i < round; i++) {
            let a = Math.round(getRandom(1, n-1) );
            let x = Math.pow(a, 2) % n;

            if(x == 1 || x == n-1)
                continue;

            let s = 0;
            let z = n-1
            while(z % 2 !== 1 ) {
                z /= 2;
                s++;
            }

            for(let  j = 0; j < s-1; j++) {
                x = Math.pow(x, 2) % n;
                if(x == 1)
                    return false; // составное

                if(x == n-1) {
                    break;
                }
                return false; // составное
            }
            return true // простое
        }
    }

}



function check(n){
    n=parseInt(n);
    if ((n%2==0)&&(n!=2))
        return false
    else if (n==2)
        return true
    else{
         k=Math.round(Math.sqrt(n));
         flag = false;

         for(i=2; i<k+1; i++)
            if(n%i==0)
            {
              return false
              flag = true;
              break;
             }

         if (flag == false)
           return true
    }
}