// ---- recursividad ---- //

function recursividad(numero){
    console.log(numero);
(numero < 5) ? recursividad(numero + 1) : numero = 5;
    }

    arreglo1 = [12,54,51,87986,54987,56465,49874,94,654,4,4]

    function recursividad2(arr){
        if (arr.length  != 0) {
            const firt = arr[0]
            console.log(firt)
            arr.shift()
            recursividad2(arr)
        } 
    }


