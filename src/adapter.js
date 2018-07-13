const beersURL = "http://localhost:3000/beers"

class Adapter {

  static getBeers() {
    return fetch(beersURL).then(r => r.json() )
  }

  static getSingleBeer(id) {
    return fetch(beersURL + `/${id}`).then(r => r.json() )
  }

}
