const axios = require("axios")
const dotenv = require("dotenv")
dotenv.config()

const apiKey = process.env.POSITIONSTACK_API_KEY

const execForward = async() => {
    const query = "Cadelbosco di Sopra, Reggio Emilia"

    const response = await axios.get("http://api.positionstack.com/v1/forward", {
        params: {
          query: query,
          access_key: apiKey,
          limit: 3
        }
    })

    console.log(response.data.data)
}

const execReverse = async() => {
    const query = "40.7638435,-73.9729691"

    const response = await axios.get("http://api.positionstack.com/v1/reverse", {
        params: {
          query: query,
          access_key: apiKey,
          limit: 3
        }
    })

    console.log(response.data.data)
}

// execForward()
// execReverse()

