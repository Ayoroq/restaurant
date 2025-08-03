function changeToContact() {
  const content = document.querySelector(".content");
  content.innerHTML = "";

  const section = document.createElement("section");
  section.classList.add("contact");
  section.innerHTML = `
    <h1>DON'T HESITATE TO CONTACT US<br />☞</h1>
    <div class="container">
    <p>
        asEdeyhot@gmail.com <br/><br>
        416-000-0000
    </p>
    <address>123 Toronto Street, Toronto, ON M5A 000</address>
    </div>`;
  content.appendChild(section);
}

export default changeToContact;
