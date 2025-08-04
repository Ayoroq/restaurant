import mainImage from '/src/assets/food.jpg';
import jollofImage from '/src/assets/hero-jollof.jpeg';
import fajitaImage from '/src/assets/hero-fajita.png';
import steakImage from '/src/assets/hero-steak.png';
import burgerImage from '/src/assets/hero-burger.png';
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
    <img width="600px" alt="" class="main-image" src="${mainImage}">
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
    <img src="${jollofImage}" alt="">
    <img src="${fajitaImage}" alt="">
    <img src="${steakImage}" alt="">
    <img src="${burgerImage}" alt="">
    `;
  content.appendChild(gallery);
}

export default addContents;
