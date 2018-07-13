document.addEventListener("DOMContentLoaded", function() {

  const beerBar = document.querySelector("#beer-list")


  // function renderBeerList(beerObj) {
  //   const listArea = document.querySelector("#beer-list")
  //   const beerName = document.createElement("li")
  //
  //
  //   beerName.innerText = this.name
  //   beerName.dataset.id = this.id
  //
  //   listArea.append(beerName)
  //
  // }

  Adapter.getAllBeers()
  .then((beerObjs) => {
    console.log(beerObjs)
    beerObjs.forEach((beer) => {
    const eachBeer = new Beer(beer)
    eachBeer.renderBeerList()
  })
  })

  document.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      const id = e.target.dataset.id
      console.log(e.target.dataset.id)
  Adapter.getOneBeer(id)
  .then((singleBeer) => {
    const displayArea = document.querySelector("#beer-detail")
    const beerName = document.createElement("h1")
    const beerPic = document.createElement("img")
    const beerTag = document.createElement("h2")

    const beerForm = document.createElement("form")

    const beerDesc = document.createElement("textarea")
    const editButton = document.createElement("button")
    editButton.type = "submit"
    editButton.innerText = "Submit"

    beerForm.dataset.id = singleBeer.id
    editButton.dataset.id = singleBeer.id
    beerDesc.dataset.id = singleBeer.id

    beerName.innerText = singleBeer.name
    beerPic.src = singleBeer.image_url
    beerTag.innerText = singleBeer.tagline
    beerDesc.value = singleBeer.description

    displayArea.innerHTML = ""

    beerForm.append(beerDesc, editButton)
    displayArea.append(beerName, beerPic, beerTag, beerForm)
  })

  document.addEventListener("submit", (e) => {
    e.preventDefault()
    beerId = e.target.dataset.id
    const beerDesc = document.querySelector("textarea").value
    // beerDetails = beerDesc.value
    Adapter.editBeer(beerId, beerDesc)
    // .then()
  })
}
})

})
