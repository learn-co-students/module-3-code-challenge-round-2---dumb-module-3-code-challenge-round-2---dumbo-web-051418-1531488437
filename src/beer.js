class Beer {
  constructor(beer) {
    this.id = beer.id
    this.name = beer.name
    this.tagline = beer.tagline
    this.first_brewed = beer.first_brewed
    this.description = beer.description
    this.brewers_tips = beer.brewers_tips
    this.contributed_by = beer.contributed_by
  }

   renderBeerList(beerObj) {
    const listArea = document.querySelector("#beer-list")
    const beerName = document.createElement("li")
    beerName.class = "list-group-item"

    beerName.innerText = this.name
    beerName.dataset.id = this.id

    listArea.append(beerName)

  }
}
