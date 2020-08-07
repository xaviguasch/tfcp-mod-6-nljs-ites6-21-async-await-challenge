//Challenge - Async & Await

//Print on the console a random joke from the Chuck Norris API using Fetch and Async and Await

const apiUrl = 'https://api.chucknorris.io/jokes/random'

const printRandom = async () => {
  let call = await fetch(apiUrl)
  let response = await call.json()

  console.log(response.value)
}

printRandom()
