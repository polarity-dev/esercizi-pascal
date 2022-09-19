# Informazioni generali

## Martedí 20 Settembre

- [Challenge 1 - Array](https://challenge.soluzionifutura.it/invito?code=pascal-array)

- [Challenge 2 - Object](https://challenge.soluzionifutura.it/invito?code=pascal-object)

- [Lista Challenges](https://challenge.soluzionifutura.it/challenges)

## Link utili

- [NodeJS](https://nodejs.org/en/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Repl](https://replit.com)
- [SF Challenge](https://challenge.soluzionifutura.it)

## FAQ

Q: Come scopro se ho installato Node?
A: Apri un terminale e lancia `node -v`. Se risponde con una versione (es. `v14.19.1`) allora è installato

Q: Come faccio ad eseguire un file `.js`?
A: Apri un terminale e lancia il comando `node <path_file_js>`. Se il tuo terminale è già nella cartella del file `.js` che vuoi eseguire ti basterà lanciare il comando `node <nome_file_js>`

Q: Quando tento di eseguire un file `.js` mi salta fuori un errore. Cosa posso fare?
A: Se l'errore è quello presentato di seguito, vuol dire che hai scritto il nome corretto eseguendo il comando `node ...`. Sei nella stessa cartella del file `.js` che vuoi eseguire?

```js
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module 'C:/ ... /file.js'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:75:12)
    at internal/main/run_main_module.js:17:47 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}
```
