let count = 0 


 function incount(ab){

    count++;
    return count()
}
try {incount() }

catch(err) {
  console.log(err,count);
  console.log(count);
}
///part 2

function flattenArray(arr) {
    const flattened = []
    
    function dfs(index, currentArray) {
        if (index === currentArray. length) return;
    if (Array. isArray(currentArray[index])) {
    dfs(0, currentArray[index]);
    }
    if ( typeof currentArray[index] === typeof
    cunrentArray[ index]===
    "number" ||
    "string"
    )
    flattened. push(currentArray[index]);
}
    dfs (index + 1,currentArray);
    dfs (0, arr);
    return flattened;
}
//part 3 / takes an parameter and creates a list 
let holdnum = document.querySelector(".PrimeNumba")


function findprime()
{

 let m = 2
for (let n = 2; n < p ;n++)
if (n % 2 === 1 && n % 3 <= m && n % 1 === 0)  
    return true
else{(n % 2 === 0 && n % 4 === 0 && n % 3 === 0 && n % 1 === 0)
    return false

}}
findprime(p = 24)

// / takes an parameter and creates a list 


const addprime = (n, count = 1 , sum =0)

if (count>n){
    window.alert(`its done now`)
    return;

}

if (findprime(count)) {
 sum = sum + count 
holdnum.innerHTML += `<h1>${count}</h1> <br/>`
}

setTimeout(()=> addprime(n, count + 1, sum),0)



