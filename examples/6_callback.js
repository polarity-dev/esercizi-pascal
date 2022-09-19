setTimeout(() => {
    console.log("Hello!")
}, 3000)

// Alternativa

const callbackFunction = () => {
    console.log("Hello!")
}

setTimeout(callbackFunction, 3000)