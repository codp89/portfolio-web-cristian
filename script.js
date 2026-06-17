const menuBtn=document.getElementById("menuBtn");const navLinks=document.getElementById("navLinks");menuBtn.addEventListener("click",()=>{navLinks.classList.toggle("active")});document.querySelectorAll(".nav-links a").forEach(link=>{link.addEventListener("click",()=>{navLinks.classList.remove("active")})});const revealElements=document.querySelectorAll(".reveal");const revealOnScroll=()=>{const windowHeight=window.innerHeight;revealElements.forEach(element=>{const elementTop=element.getBoundingClientRect().top;if(elementTop<windowHeight-80){element.classList.add("active")}})};window.addEventListener("scroll",revealOnScroll);window.addEventListener("load",revealOnScroll);

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = contactForm.nombre.value;
    const email = contactForm.email.value;
    const mensaje = contactForm.mensaje.value;

    const texto = `Hola Cristian, soy ${nombre}.
Email: ${email}

${mensaje}`;

    const url = `https://wa.me/5491158690475?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
  });
}
