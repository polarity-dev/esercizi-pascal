/* 

Scrivere un file `.js` che:
 - dichiara un array `arr` con i valori `4, 10, -3, 5`
 - dichiara una funzione che stampi l'array (sia con arrow function `=>` che function classica `function`)
 - dichiara un secondo array `arr2` con i valori di `arr` raddoppiati (utilizzando un ciclo `for(...)`)
 - dichiara un array `arr3` con i valori di `arr` raddoppiati utilizzando il metodo visto prima `arr.map(...)`
 - stampa `arr2` e `arr3` utilizzando una delle funzioni dichiarate prima

*/

const arr = [4, 10, -3, 5]

function stampa1(arr) {
  console.log(arr)
}

const stampa2 = (arr) => {
  console.log(arr)
}

const arr2 = []
for (let i=0; i<arr.length; i++) {
  arr2.push(arr[i] * 2)
  // oppure arr2[i] = arr[i] * 2
}

const arr3 = arr.map(el => {
  return el*2
})

stampa1(arr2)
stampa2(arr3)