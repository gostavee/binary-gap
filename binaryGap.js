const solution = (num) => {
    const bin = num.toString(2);
    let maxGap = 0;
    let currentMax = 0;
    for(let i = 0; i < bin.length; i++) {
        if(bin[i] === "0") {
            currentMax++
        } else {
            if(currentMax > maxGap) {
                maxGap = currentMax;
            }
            currentMax = 0;
        }
    }
    console.log("max gap of: " + bin + " is: " + maxGap);
    return maxGap;
}
console.time("solution");
solution(6);
console.timeEnd("solution");
