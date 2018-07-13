document.addEventListener("DOMContentLoaded", function() {

  Adapter.getAllBeers()
    .then((beers) => beers.forEach(Beer.renderBeer))
})
