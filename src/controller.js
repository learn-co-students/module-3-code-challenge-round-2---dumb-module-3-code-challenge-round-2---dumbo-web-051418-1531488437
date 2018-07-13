class Controller {

  static renderBeers() {
    const listGroup = document.querySelector(".list-group")
    Adapter.getBeers()
    .then( (beers => {
      console.log(beers)

      beers.forEach(beer => {

        const beerTitle=
        `<li class="list-group-item" data-id=${beer.id}>${beer.name}</li>`

        listGroup.innerHTML += beerTitle

      });

      listGroup.addEventListener("click", function(e){
        // console.log(e.target.dataset.id)

        document.querySelector("#beer-detail")
        Controller.renderSingleBeer(e.target.dataset.id)
      });
    })
  )
  }

  static renderSingleBeer(id) {
    Adapter.getSingleBeer(id)
    .then( beer => {
      const beerDetail = document.querySelector("#beer-detail")

      beerDetail.innerHTML = ""

      beerDetail.innerHTML +=
      `
        <h1>${beer.name}</h1>
        <img src="${beer.image_url}">
        <h3>${beer.tagline}</h3>
        <textarea>${beer.description}</textarea>
        <button id="edit-beer" class="btn btn-info">
          Save
        </button>
        `
        // use querySelector and grab the button and equal it to a variable
        // use variable and add event listener
        // pass in function to event listener
        // patch request for beer description
    })
  }
}
