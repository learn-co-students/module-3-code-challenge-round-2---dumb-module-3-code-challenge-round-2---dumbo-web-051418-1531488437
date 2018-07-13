class Adapter{

  static getAllBeers(){
    const baseURL = `http://localhost:3000/beers`

    return fetch(baseURL)
      .then(r => r.json())
  }

  static getSingleBeer(id){
    const baseURL = `http://localhost:3000/beers/${id}`

    return fetch(baseURL)
      .then(r => r.json())
  }

  static editBeer(beer){
    const baseURL = `http://localhost:3000/beers/${beer.id}`
    const options = {
      method: "PATCH",
      headers: {"Content-Type": 'application/json', "Accept": "application/json"},
      body: JSON.stringify({description: `${beer.description}`})
    }

    return fetch(baseURL, options)
      .then(r => r.json())
  }
}
