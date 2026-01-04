function scrollToSection(id){
  const target = document.getElementById(id);
  if(!target) return;

  const offset = window.innerWidth <= 768 ? 80 : 20;

  window.scrollTo({
    top: target.offsetTop - offset,
    behavior: "smooth"
  });
}

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".sidebar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const top = section.offsetTop - 160;
    const height = section.offsetHeight;

    if (window.scrollY >= top && window.scrollY < top + height) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${current}`
    );
  });
});

const skills = ["Web Developer", "UI Designer", "JavaScript Enthusiast"];
let i = 0, j = 0, del = false;
const el = document.getElementById("skills");

if(el){
  (function type(){
    if(!del){
      el.textContent = skills[i].slice(0, ++j);
      if(j === skills[i].length) setTimeout(() => del = true, 1000);
    }else{
      el.textContent = skills[i].slice(0, --j);
      if(j === 0){
        del = false;
        i = (i + 1) % skills.length;
      }
    }
    setTimeout(type, del ? 80 : 120);
  })();
}
