const axios = require("axios")

// https://jsonplaceholder.typicode.com/
const main = async() => {
    const response = await axios("https://jsonplaceholder.typicode.com/posts")
    const data = response.data

    // Filter of posts of user 3
    const filteredPosts = data.filter(e => e.userId === 3)
    console.log(filteredPosts)

    // Get post n. 10
    const responseNew = await axios("https://jsonplaceholder.typicode.com/posts/10")
    const dataNew = responseNew.data
    console.log(responseNew)
}

main()

