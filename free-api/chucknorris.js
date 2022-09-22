const axios = require("axios")

// https://api.chucknorris.io/
const main = async() => {
    const query = "phone"
    const response = await axios("https://api.chucknorris.io/jokes/random")

    console.log(response.data)
}

main()

