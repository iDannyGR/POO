function solution(array, query){
    return array.filter(item => {
        return item.includes(query)
    })
}


console.log(solution(["ana", "santi", "nico", "anastasia"], "an"));
console.log(solution(["ana", "santi", "nico", "anastasia"], "xyz"));