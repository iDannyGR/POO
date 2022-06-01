function solution(arrays){
    return arrays.some( number => number % 2 === 0)
}


console.log(solution([1, 3, 5, 7, 10, 11]))
console.log(solution([1, 3, 5]))