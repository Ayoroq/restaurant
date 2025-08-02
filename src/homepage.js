// function to add contents to the html page upon load
function addContents() {
    //first create a div element
    const div = document.createElement('div');
    div.classList.add('description');
    div.innerHTML = `
    <h1>As É Dey Hot!</h1>
    <p>
      Step into a world of rich spices, bold flavors, and the heart of
      Nigerian cooking. From sizzling suya to velvety egusi, every dish is
      made fresh and served with heat. No shortcuts. No apologies. Just the
      real taste of Naija.
    </p>
    `;
    document.querySelector('.content').appendChild(div)
    
    // create the images div
    const imagesDiv = document.createElement('div');
    imagesDiv.classList.add('images');
    imagesDiv.innerHTML = `
    <img src="/src/assets/food.jpg" width="600px" alt="">
    `;
    document.querySelector('.content').appendChild(imagesDiv);

    //create a div for the favourites words and line
    const favouritesTitle = document.createElement(div);
    favouritesTitle.classList.add('favourites-title');
    favouritesTitle.innerHTML = `
    <p>Favourite Picks</p>
    <hr>
    `;
    document.querySelector('.content').appendChild(favouritesTitle);

    // create the favourites div
    const favouritesDiv = document.createElement('div');
    favouritesDiv.classList.add('favourites');
    favouritesDiv.innerHTML = `
    <img src="/src/assets/puff_puff.jpg" alt="">
    <img src="/src/assets/efo.jpg" alt="">
    <img src="/src/assets/soup.jpg" alt="">
    `;
    document.querySelector('.content').appendChild(favouritesDiv)

}