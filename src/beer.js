class Beer {
  constructor(beer) {
    this.id = beer.id
    this.name = beer.name
    this.tagline = beer.tagline
    this.description = beer.description
    this.image_url = beer.image_url
  }
  // renders the beers on the page on the sidebar
  static renderBeer(beer) {
    const newBeer = new Beer(beer)
    const beerList = document.querySelector('#list-group')
    beerList.append(newBeer.el())
  }
  // renders the beer info that is clicked on the sidebar
  // Added elements as well as button event listeners
  static renderInfo(beer) {
    const newBeer = new Beer(beer)
    const beerDetailsDiv = document.querySelector('#beer-detail')

    let h1Tag = document.createElement('h1')
    h1Tag.innerText = newBeer.name

    let imgTag = document.createElement('img')
    imgTag.src = newBeer.image_url

    let h3Tag = document.createElement('h3')
    h3Tag.innerText = newBeer.tagline

    let textarea = document.createElement('textarea')
    textarea.innerText = newBeer.description

    let button = document.createElement('button')
    button.dataset.id = newBeer.id
    button.id = "edit-beer"
    button.class = "btn btn-info"
    button.innerText = "Save"

    button.addEventListener('click', (e) => {
      const id = e.target.dataset.id
      // console.log(e)
      const newDescription = document.querySelector('textarea').value
      Adapter.updateBeer(id, newDescription)
    })
    beerDetailsDiv.innerHTML = ""  // resets any existing beer that was clicked
    beerDetailsDiv.append(h1Tag, imgTag, h3Tag, textarea, button) //appends the elements to the details div

  }

  // li tag and event listener created after beers are fetched
  el() {
    const beerLiTag = document.createElement('li')
    beerLiTag.class = "list-group-item"
    beerLiTag.dataset.id = this.id
    beerLiTag.innerText = this.name


    beerLiTag.addEventListener('click', (e) => {
      const id = e.target.dataset.id
      // console.log(id)
      Adapter.getOneBeer(id)
        .then((data) => Beer.renderInfo(data))
    })
    return beerLiTag
  }

}
