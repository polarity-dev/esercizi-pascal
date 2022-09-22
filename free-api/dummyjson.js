const axios = require("axios")

// https://dummyjson.com/docs
const main = async() => {
    const query = "phone"
    const response = await axios("https://dummyjson.com/products/search", {
        params: {
            q: query
        }
    })

    const data = response.data

    console.log(data)
}

main()

