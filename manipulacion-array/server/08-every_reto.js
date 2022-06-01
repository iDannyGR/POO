const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];

const rta = {}
  rta = team.every(item => {item.age >=18 })
  console.log(rta)


  function solution(arrays){
    return arrays.every( number => number % 2 === 0)
}


console.log(solution([2, 4, 6, 8, 10]));
console.log(solution([1, 3, 5, 7, 10, 11]));
console.log(solution([1, 3, 5]));