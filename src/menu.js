// Import all menu images
import burgerImg from '/src/assets/burger.jpg';
import carrotSoupImg from '/src/assets/carrot_soup.jpg';
import sushiImg from '/src/assets/sushi.jpg';
import bibimbapImg from '/src/assets/bibimbap.jpg';
import empanadasImg from '/src/assets/empanadas.jpg';
import efoRiroImg from '/src/assets/efo-riro.jpg';
import pieImg from '/src/assets/pie.jpg';
import grilledChickenImg from '/src/assets/grilled-chicken.jpg';
import jerkImg from '/src/assets/jerk.jpg';
import bulgogiImg from '/src/assets/bulgogi.jpg';
import salmonImg from '/src/assets/salmon.jpg';
import tacosImg from '/src/assets/tacos.jpg';
import steakImg from '/src/assets/steak.jpg';
import jollofImg from '/src/assets/jollof.png';
import friedRiceImg from '/src/assets/fried-rice.png';
import oatmealImg from '/src/assets/oatmeal.jpg';
import bulgurImg from '/src/assets/bulgur.jpg';
import quinoaImg from '/src/assets/quinoa.jpg';
import couscousImg from '/src/assets/couscous.jpg';
import puffPuffImg from '/src/assets/puff-puff.jpg';
import meatPieImg from '/src/assets/meat-pie.jpg';
import sausageImg from '/src/assets/sausage.jpg';
import chinChinImg from '/src/assets/chin-chin.jpeg';
import tostonesImg from '/src/assets/tostones.png';
import moiMoiImg from '/src/assets/moi-moi.jpg';
import akaraImg from '/src/assets/akara.jpeg';
import zoboImg from '/src/assets/zobo.png';
import beerImg from '/src/assets/beer.jpg';
import juiceImg from '/src/assets/juice.jpg';
import cokeImg from '/src/assets/coke.jpg';
import waterImg from '/src/assets/water.jpg';

// this is the function to show the menu when the user clicks on the menu button
function changeToMenu() {
  const content = document.querySelector(".content");
  content.innerHTML = "";

  const section = document.createElement("section");
  section.classList.add("menu");
  content.appendChild(section);

  const menuCard1 = document.createElement("div");
  menuCard1.classList.add("menu-card");
  menuCard1.innerHTML = `
    <h3>Main Dishes</h3>
    <ul>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="${burgerImg}" alt="Smash burger" />
            <p>Smash Burger<span class="price">$9</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="${carrotSoupImg}" alt="Carrot Soup" />
            <p>Carrot Soup<span class="price">$12</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="${sushiImg}" alt="Sushi Rolls" />
            <p>Sushi Rolls<span class="price">$12</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="${bibimbapImg}" alt="Bibimbap" />
            <p>Bibimbap<span class="price">$11</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="${empanadasImg}" alt="Empanadas" />
            <p>Empanadas<span class="price">$10</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="${efoRiroImg}" alt="Efo Riro" />
            <p>Efo Riro<span class="price">$11</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="${pieImg}" alt="pie" />
            <p>Pie<span class="price">$12</span></p>
        </div>
        </li>
    </ul>`;
  section.appendChild(menuCard1);

  const menuCard2 = document.createElement("div");
  menuCard2.classList.add("menu-card");
  menuCard2.innerHTML = `
    <h3>Proteins / Meats</h3>
    <ul>
        <li class="menu-item">
        <div class="menu-item-container">
            <img
            src="${grilledChickenImg}"
            alt="Grilled Chicken"
            />
            <p>Grilled Chicken<span class="price">$6</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="${jerkImg}" alt="Jamaican Jerk Chicken" />
            <p>Jamaican Jerk Chicken <span class="price">$7</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="${bulgogiImg}" alt="Beef Bulgogi" />
            <p>Beef Bulgogi<span class="price">$8</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="${salmonImg}" alt="Grilled Salmon" />
            <p>Grilled Salmon<span class="price">$9</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="${tacosImg}" alt="Fish Tacos" />
            <p>Fish Tacos<span class="price">$6</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="${steakImg}" alt="Grilled Steak" />
            <p>Grilled Steak<span class="price">$10</span></p>
        </div>
        </li>
    </ul>`;
  content.appendChild(menuCard2);

  const menuCard3 = document.createElement("div");
  menuCard3.classList.add("menu-card");
  menuCard3.innerHTML = `
    <h3>Rice & Grains</h3>
    <ul>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="${jollofImg}" alt="Jollof Rice" />
            <p>Jollof Rice<span class="price">$10</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="${friedRiceImg}" alt="Fried Rice" />
            <p>Fried Rice<span class="price">$10</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="${oatmealImg}" alt="Oatmeal" />
            <p>Oatmeal<span class="price">$3</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="${bulgurImg}" alt="Bulgur" />
            <p>Bulgur<span class="price">$3</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="${quinoaImg}" alt="Quinoa" />
            <p>Quinoa<span class="price">$3.50</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="${couscousImg}" alt="Couscous" />
            <p>Couscous<span class="price">$3.50</span></p>
        </div>
        </li>
    </ul>`;
  content.appendChild(menuCard3);

  const menuCard4 = document.createElement("div");
  menuCard4.classList.add("menu-card");
  menuCard4.innerHTML = `
    <h3>Snacks / Small Chops</h3>
    <ul>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="${puffPuffImg}" alt="Puff-Puff" />
            <p>Puff-Puff<span class="price">$4</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="${meatPieImg}" alt="Meat Pie" />
            <p>Meat Pie<span class="price">$3</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="${sausageImg}" alt="Sausage Roll" />
            <p>Sausage Roll<span class="price">$2.50</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="${chinChinImg}" alt="Chin Chin" />
            <p>Chin Chin<span class="price">$3</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="${tostonesImg}" alt="Tostones" />
            <p>Tostones<span class="price">$6</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="${moiMoiImg}" alt="Moi Moi" />
            <p>Moi Moi<span class="price">$4</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="${akaraImg}" alt="Akara" />
            <p>Akara<span class="price">$3</span></p>
        </div>
        </li>
    </ul>`;
  content.appendChild(menuCard4);

  const menuCard5 = document.createElement("div");
  menuCard5.classList.add("menu-card");
  menuCard5.innerHTML = `
    <h3>Drinks</h3>
    <ul>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="${zoboImg}" alt="Zobo" />
            <p>Zobo<span class="price">$2.50</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="${beerImg}" alt="Beer" />
            <p>Beer<span class="price">$5</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img
            src="${juiceImg}"
            alt="Juice"/>
            <p>Juice<span class="price">$1.50</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img
            src="${cokeImg}"
            alt="Fanta / Coke / Sprite"
            />
            <p>Fanta / Coke / Sprite<span class="price">$2</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="${waterImg}" alt="Bottled Water" />
            <p>Bottled Water<span class="price">$1.50</span></p>
        </div>
        </li>
    </ul>`;
    content.appendChild(menuCard5);
}

export default changeToMenu;