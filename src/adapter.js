class Adapter {

  // GET request for all beers
  static getAllBeers(){
    const beerURL = `http://localhost:3000/beers`
    return fetch(beerURL)
      .then(req => req.json())
  }

  // GET request for one beer
  static getOneBeer(id){
    const beerURL = `http://localhost:3000/beers/${id}`
    return fetch(beerURL)
      .then(req => req.json())
  }

  // Update a beer with a PATCH request using parameters of the id and the new description
  static updateBeer(id, newDescription) {
    const beerURL = `http://localhost:3000/beers/${id}`
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({description: newDescription})
    }
    return fetch(beerURL, options)
      .then(req => req.json())
  }

}
