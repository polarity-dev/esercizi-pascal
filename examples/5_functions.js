/* 
    function e arrow function sono 2 modi 
    di scrivere la stessa cosa: delle funzioni.

    Le funzioni possono ritornare qualcosa
    oppure no, in questo caso il valore di default
    che viene restituito è il valore "undefined".

    Le funzioni che non restituiscono nulla possono
    essere comparate alle funzioni "void" di C++
*/

function stampa(el) {
  console.log(el)
}

const stampa2 = (el) => {
  console.log(el)
}

stampa(10)
stampa2("Ciao")

function raddoppia(el) {
  return el * 2
}

const raddoppia2 = (el) => {
  return el * 2
}

const raddoppia3 = (el) => el * 2

console.log(raddoppia(2))
console.log(raddoppia2(-3))
console.log(raddoppia3(10))

/*
    raddoppia3 rientra sempre nella categoria 
    "arrow function", ha semplicemente una 
    sintassi più ristretta.

    Tutte e 3 le funzioni eseguono le stesse operazioni.
*/