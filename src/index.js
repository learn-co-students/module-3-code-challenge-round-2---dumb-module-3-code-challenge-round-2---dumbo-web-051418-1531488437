const beersURL = 'http://localhost:3000/beers'

document.addEventListener("DOMContentLoaded", function(e) {
  renderAllBeers(beersURL)

  // DOM Manipulation


  function renderAllBeers(beers){
    fetch(beers)
    .then( r => r.json() )
    .then( (beers) => {
        let beerList = document.getElementById('list-group')
        beers.forEach(beer => {
          beerList.innerHTML += `
            <li class="list-group-item" id="${beer.id}"> ${beer.name} </li>
            `
        })
        beerList.addEventListener('click', (e) => {
            renderSingleBeer(e.target.id);
        })
      })
  }

  function renderSingleBeer(beerId) {
    const singleURL = beersURL + `/${beerId}`
    fetch(singleURL)
    .then(r=>r.json())
    .then(beer => {

      let beerDetail = document.getElementById('beer-detail')
      beerDetail.innerHTML =
      // return
      `<h1>${beer.name}</h1>
      <img src="${beer.image_url}">
      <h3>${beer.tagline}</h3>
      <textarea>${beer.description}</textarea>
      <button id="edit-beer" class="btn btn-info">
        Save
      </button>`
    })
  }
//   const editBeer = document.getElementById
//    beerList.addEventListener('click', (e) => {
            // updateBeerDescript(e);
//

  function updateBeerDescript(beerId) {
    const singleURL = beersURL + `/${beerId}`
    fetch(singleURL)
    .then(r=>r.json())
    .then(beer => {
    const words = {description: `${beer.description}`}

    const options = {
    method: "PATCH",
    headers:   {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    body: JSON.stringify(words)
  }
  fetch(singleURL, options).then( r => r.json())
}


})
