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
            <img src="/src/assets/burger.jpg" alt="Smash burger" />
            <p>Smash Burger<span class="price">$9</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="/src/assets/carrot_soup.jpg" alt="Carrot Soup" />
            <p>Carrot Soup<span class="price">$12</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="/src/assets/sushi.jpg" alt="Sushi Rolls" />
            <p>Sushi Rolls<span class="price">$12</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="/src/assets/bibimbap.jpg" alt="Bibimbap" />
            <p>Bibimbap<span class="price">$11</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="/src/assets/empanadas.jpg" alt="Empanadas" />
            <p>Empanadas<span class="price">$10</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="/src/assets/efo-riro.jpg" alt="Efo Riro" />
            <p>Efo Riro<span class="price">$11</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="/src/assets/pie.jpg" alt="pie" />
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
            src="/src/assets/grilled-chicken.jpg"
            alt="Grilled Chicken"
            />
            <p>Grilled Chicken<span class="price">$6</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="/src/assets/jerk.jpg" alt="Jamaican Jerk Chicken" />
            <p>Jamaican Jerk Chicken <span class="price">$7</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="/src/assets/bulgogi.jpg" alt="Beef Bulgogi" />
            <p>Beef Bulgogi<span class="price">$8</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="/src/assets/salmon.jpg" alt="Grilled Salmon" />
            <p>Grilled Salmon<span class="price">$9</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="/src/assets/tacos.jpg" alt="Fish Tacos" />
            <p>Fish Tacos<span class="price">$6</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="/src/assets/steak.jpg" alt="Grilled Steak" />
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
            <img src="/src/assets/jollof.png" alt="Jollof Rice" />
            <p>Jollof Rice<span class="price">$10</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="/src/assets/fried-rice.png" alt="Fried Rice" />
            <p>Fried Rice<span class="price">$10</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="/src/assets/oatmeal.jpg" alt="Oatmeal" />
            <p>Oatmeal<span class="price">$3</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="/src/assets/bulgur.jpg" alt="Bulgur" />
            <p>Bulgur<span class="price">$3</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="/src/assets/quinoa.jpg" alt="Quinoa" />
            <p>Quinoa<span class="price">$3.50</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="/src/assets/couscous.jpg" alt="Couscous" />
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
            <img src="/src/assets/puff-puff.jpg" alt="Puff-Puff" />
            <p>Puff-Puff<span class="price">$4</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="/src/assets/meat-pie.jpg" alt="Meat Pie" />
            <p>Meat Pie<span class="price">$3</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="/src/assets/sausage.jpg" alt="Sausage Roll" />
            <p>Sausage Roll<span class="price">$2.50</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="/src/assets/chin-chin.jpeg" alt="Chin Chin" />
            <p>Chin Chin<span class="price">$3</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="/src/assets/tostones.png" alt="Tostones" />
            <p>Tostones<span class="price">$6</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="/src/assets/moi-moi.jpg" alt="Moi Moi" />
            <p>Moi Moi<span class="price">$4</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="/src/assets/akara.jpeg" alt="Akara" />
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
            <img src="/src/assets/zobo.png" alt="Zobo" />
            <p>Zobo<span class="price">$2.50</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="/src/assets/beer.jpg" alt="Beer" />
            <p>Beer<span class="price">$5</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img
            src="/src/assets/juice.jpg"
            alt="Juice"/>
            <p>Juice<span class="price">$1.50</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img
            src="/src/assets/coke.jpg"
            alt="Fanta / Coke / Sprite"
            />
            <p>Fanta / Coke / Sprite<span class="price">$2</span></p>
        </div>
        </li>
        <li class="menu-item">
        <div class="menu-item-container">
            <img src="/src/assets/water.jpg" alt="Bottled Water" />
            <p>Bottled Water<span class="price">$1.50</span></p>
        </div>
        </li>
    </ul>`;
    content.appendChild(menuCard5);
}

export default changeToMenu;