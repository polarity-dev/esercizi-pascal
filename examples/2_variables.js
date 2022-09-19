/* VAR: da non usare!! */
var x = 10

/* LET: variabile che può essere riassegnata */
let y = 20
y = y + 5

/* CONST: variabile che non può essere riassegnata */
const z = 30

const w = [1, 2, 3]
w.push(4)

/* 
    Attenzione! La variabile "w" è un riferimento
    Essendo una const non si può eseguire l'operazione di assegnamento! (w = [5, 6, 7])
    Possono però essere eseguite operazioni sull'array:
        - w[2] = 10
        - w.push(12)
        - w.filter(...)
*/