class Adapter {

  static getAllBeers() {
    const baseURL="http://localhost:3000/beers"
    return fetch(baseURL)
    .then(response => response.json())
  }

  static getOneBeer(id) {
    const oneURL=`http://localhost:3000/beers/${id}`
    return fetch(oneURL)
    .then(response => response.json())
  }
// should have passed in an object, and then used object.id for the interpolation
// then passed the object into the body
  static editBeer(id,beerDesc) {
    const editURL=`http://localhost:3000/beers/${id}`

    const options= {
      method:"PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(beerDesc),
    }
    return fetch(editURL, options)
      .then(response => response.json())
  }
}
