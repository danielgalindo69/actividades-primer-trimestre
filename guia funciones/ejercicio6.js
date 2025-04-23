
function maximoDivisor(a,b){
    let max = Math.max(a,b);
    let min = Math.min(a,b);

    for (let i = min; i >= 1; i--){
        if (max % i === 0 && min % i ===0)
            return i;
    
    }

    return -1;

}

console.log(maximoDivisor(24, 36));