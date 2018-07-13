class Beer{

  static showAllBeers(){
    Adapter.getAllBeers()
      .then(beers => {
        // console.log(beers);
        beers.forEach(function(beer){
            // console.log(beer);
            let beerLocation = document.getElementById('list-group')

            let beerLi = document.createElement('li')
            beerLi.setAttribute('id', `${beer.id}`)
            beerLi.innerHTML = `${beer.name}`
            beerLi.className = 'list-group-item'

            beerLi.addEventListener('click', function(e){
              let beerDetailLocation = document.getElementById('beer-detail')
              beerDetailLocation.innerHTML = ''
              Adapter.getSingleBeer(beer.id)
                .then(beer => {
                  let beerHTwo = document.createElement('h1')
                  beerHTwo.innerHTML = beer.name
                  // console.log(beer.name);

                  let beerImg = document.createElement('img')
                  beerImg.setAttribute('src', `${beer.image_url}`)

                  let beerTagLine = document.createElement('h3')
                  beerTagLine.innerHTML = beer.tagline

                  let beerDesc = document.createElement('textarea')
                  beerDesc.setAttribute('id', 'beer-description')
                  beerDesc.innerHTML = `${beer.description}`

                  let editButton = document.createElement('button')
                  editButton.setAttribute('id', 'edit-beer')
                  editButton.setAttribute('class', 'btn btn-info')
                  editButton.innerHTML = 'Save'

                  editButton.addEventListener('click', function(e){
                    // console.log(beer);
                    let beerDescTextArea = document.getElementById("beer-description")
                    // let newBeerDesc = beerDescTextArea.value
                    // console.log(newBeerDesc);

                    let editedBeer = {id: beer.id,
                        name: beer.name,
                        tagline: beer.tagline,
                        first_brewed: beer.first_brewed,
                        description: `${beerDescTextArea.value}`,
                        image_url: beer.image_url,
                        food_pairing: beer.food_pairing,
                        brewers_tips: beer.brewers_tips,
                        contributed_by: beer.contributed_by}

                    console.log(editedBeer.description);
                    Adapter.editBeer(editedBeer)
                    .then(beer => {
                      console.log(beer);
                    })
                  })

                  beerDetailLocation.appendChild(beerHTwo)
                  beerDetailLocation.appendChild(beerImg)
                  beerDetailLocation.appendChild(beerTagLine)
                  beerDetailLocation.appendChild(beerDesc)
                  beerDetailLocation.appendChild(editButton)
                })
            })

            beerLocation.appendChild(beerLi)

        })
      })
  }

}
