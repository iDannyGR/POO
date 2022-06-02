function solution(url){
    return url.split(' ').join('-').toLowerCase()
}


console.log(solution("La forma de correr Python"));
console.log(solution("La API para nunca parar de aprender"));
console.log(solution("Curso de arrays"))