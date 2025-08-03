// function to add contents to the html page upon load
function addContents() {
  const content = document.querySelector(".content");
  content.innerHTML = "";

  //first create a div element
  const div = document.createElement("div");
  div.classList.add("description");
  div.innerHTML = `
    <h1>As É Dey Hot!</h1>
    <p>
      Step into a world of rich spices, bold flavors, and the heart of Nigerian cooking.
      From sizzling suya to velvety egusi, every dish is made fresh and served with heat the kind that hugs your chest and wakes your soul.
      No shortcuts. No apologies. Just the real taste of Naija. Smoky, spicy, and deeply satisfying.
    </p>
    `;
  content.appendChild(div);

  // create the images div
  const imagesDiv = document.createElement("div");
  imagesDiv.classList.add("images");
  imagesDiv.innerHTML = `
    <img src="/src/assets/food.jpg" width="600px" alt="">
    `;
  content.appendChild(imagesDiv);

  //create a div for the favourites words and line
  const favourites = document.createElement("div");
  favourites.classList.add("favourites");
  favourites.innerHTML = `
    <p>Favourite Picks</p>
    <hr>
    `;
  content.appendChild(favourites);

  // create the favourites div
  const gallery = document.createElement("div");
  gallery.classList.add("gallery");
  gallery.innerHTML = `
    <img src="/src/assets/hero-jollof.jpeg" alt="">
    <img src="/src/assets/greens.jpg" alt="">
    <img src="/src/assets/bowl.jpg" alt="">
    `;
  content.appendChild(gallery);
}

export default addContents;
