function changeToAbout() {
  const content = document.querySelector(".content");
  content.innerHTML = "";

  const section = document.createElement("section");
  section.classList.add("about");
  section.innerHTML = `
    <h2>About Us</h2>
    <p>
    <strong>Welcome to <em>As É Dey Hot</em></strong> — where the heat
    is in the flavor, and the flavor is from everywhere.
    </p>
    <p>
    We're more than just a restaurant, we're a celebration of bold
    tastes and rich cultures. Inspired by the streets of Lagos, the
    night markets of Bangkok, the taco stands of Mexico City, and the
    comfort kitchens of the Mediterranean, our menu brings together the
    best of global cuisine in one lively, colorful space.
    </p>
    <p>
    Whether you're biting into smoky jerk chicken, spooning up creamy
    bibimbap, or savoring the crunch of tostones, you'll taste one thing
    in every dish: authenticity. We don't cut corners. We cook with
    heat, soul, and zero apologies.
    </p>
    <p>
    Everything we serve is made fresh and served with care from our
    handmade puff-puff to our chilled hibiscus coolers. Whether you're
    dropping in for a quick snack or staying for a full meal, there's
    something here that'll surprise your taste buds and maybe even bring
    back a memory or two.
    </p>
    <p>
    <strong>Our Mission:</strong> To bring people together through food
    that tells stories of tradition, innovation, and the beautiful chaos
    that happens when cultures collide on a plate.
    </p>
    <p>
    Founded by Chef Anjola in 2019, our kitchen is led by someone who
    grew up between three continents and learned that the best meals
    happen when you stop worrying about rules and start cooking with
    your heart.
    </p>
    <p>
    We source locally when we can, support small farmers, and believe
    that good food should be accessible to everyone. That's why you'll
    find both street food prices and fine dining flavors under our roof.
    </p>
    <p>So sit down, dig in, and take your tongue on a trip.</p>
    <p>
    Come hungry, leave happy, and don't be surprised if you find
    yourself planning your next visit before you've even finished your
    meal.
    </p>
    <p>
    <strong>As E Dey Hot</strong> — we don't just serve food.<br /><em
        >We serve flavor</em
    >. 🌶️
    </p>`;
  content.appendChild(section);
}

export default changeToAbout;
