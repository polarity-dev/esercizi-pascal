/*
 * Partendo da un array con numeri positivi e negativi, ricavare un array con solo i numeri positivi
 */

// Array di partenza
const array1 = [1, -2, 3, -4, 5, -6, 7]

// Soluzione estesa, applichiamo il metodo filter
const soluzioneEstesa1 = array1.filter(e => {
  if (e > 0) {
    return true
  } else {
    return false
  }
})

// Soluzione compatta: stiamo sfruttando le proprietà delle arrow functions, ottenendo lo stesso risultato usando però una sola riga
const soluzioneCompatta1 = array1.filter(e => e > 0)

console.log("ESERCIZIO 1\nArray iniziale:", array1, ", array finale:", soluzioneCompatta1)

/*
 * Partendo da un array con numeri positivi e negativi, ricavare un array dove i numeri positivi
 * sono moltiplicati per 2, mentre i negativi sottratti di 2 (lasciare lo 0 così com'è)
 */

// Array di partenza
const array2 = [1, 0, 3, -4, 5, -6, 7]

// Applicando il metodo map
const soluzione2 = array2.map(e => {
  if (e === 0) { 
    return 0
  }

  if (e > 0) {
    return e * 2
  } else {
    return e - 2
  }
})

console.log("ESERCIZIO 2\nArray iniziale:", array2, ", array finale:", soluzione2)

/*
 * Partendo da un array con numeri e stringhe, restituire una stringa contenente,
 * separate da uno spazio, le parole (eliminare i numeri)
 */

// Array di partenza
const array3 = [1, "ciao", -3, "mare", 23, "pippo", 7, "pluto"]

const soluzione3 = array3.reduce((acc, e) => {
  if (typeof e === "string") { // typeof è un OPERATORE che restituisce una STRINGA che indica il tipo del valore operando (in questo caso controllo se "e" è una stringa)
    acc += (e + " ")

    /* In alternativa:
     * acc += `${e} `
     *
     * (vedi https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
     */
  }

  return acc
}, "")

console.log("ESERCIZIO 3\nArray iniziale:", array3, ", array finale:", soluzione3)
