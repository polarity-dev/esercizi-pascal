const numeri = [1, 10, -3, 5, -10, -7, 1]

/*
 * Metodo FOREACH:
 * accetta come parametro una callback con gli argomenti (elemento, indice) che
 * viene chiamata per ogni elemento dell'array
 * 
 * forEach non modifica l'array e non restituisce nulla!
 */ 

numeri.forEach((el, i) => {
  console.log("Elemento", el, "alla posizione", i) // Stampo questa frase per ogni elemento dell'array
})

/*
 * Metodo MAP:
 * accetta come parametro una callback con gli argomenti (elemento, indice) che
 * viene chiamata per ogni elemento dell'array
 * 
 * map ritorna un NUOVO array contenente i valori di ritorno di ciascuna esecuzione della callback
 */ 

const numeriRaddoppiati = numeri.map((el, indice) => { // In questo caso indice è superfluo, non lo stiamo usando nella callback
  return el * 2 // Ritorna il nuovo valore che avrà nell'array "numeriRaddoppiati", in questo caso il numero raddoppiato
})

// In modo compatto, sfruttando le proprietà delle arrow functions
const numeriRaddoppiatiCompatto = numeri.map(el => el * 2)

console.log("Numeri originali", numeri, ", numeri raddoppiati",  numeriRaddoppiati)

/*
 * Metodo FILTER:
 * accetta come parametro una callback con gli argomenti (elemento, indice) che
 * viene chiamata per ogni elemento dell'array
 * 
 * filter ritorna un NUOVO array contenente solo i valori per cui la callback ritorna TRUE
 */ 

const numeriNegativi = numeri.filter(el => {
  return el < 0 // Ritorna TRUE solo se l'elemento è negativo
})

console.log("Numeri originali", numeri, ", numeri negativi",  numeriNegativi)

/*
 * Metodo REDUCE:
 * accetta come parametro una callback con gli argomenti (acc, elemento, indice) E
 * il valore iniziale di acc (accumulator), che viene chiamata per ogni elemento dell'array.
 * La callback DEVE restituire il nuovo valore dell'accumulator, in modo che il valore intermedio
 * possa essere riutilizzato nell'esecuzione successiva.
 * 
 * reduce ritorna il valore finale dell'accumulator (non necessariamente un array,
 * può essere un numero, una stringa, ecc)
 * 
 * A lezione è stato presentato con l'esempio della staffetta.
 */ 

const sommaNumeriArray = numeri.reduce((acc, el) => {
  // Restituisco la somma tra il valore precedente dell'accumulator e l'elemento corrente. Ad ogni iterazione acc aumenterà
  return acc + el 
}, 0) // 0 è il valore iniziale dell'accumulator

console.log("Numeri originali", numeri, ", somma numeri array",  sommaNumeriArray)
