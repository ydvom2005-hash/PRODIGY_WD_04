function scrollToSection(id){
  const target = document.getElementById(id);
  window.scrollTo({
    top: target.offsetTop - 20,
    behavior: "smooth"
  });
}

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".sidebar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const top = section.offsetTop - 120;
    const height = section.offsetHeight;
    if (pageYOffset >= top && pageYOffset < top + height) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

const skills = ["Web Developer", "UI Designer", "JavaScript Enthusiast"];
let i = 0, j = 0, del = false;
const el = document.getElementById("skills");

function type(){
  if(!del){
    el.textContent = skills[i].slice(0, ++j);
    if(j === skills[i].length) setTimeout(()=>del=true, 1000);
  }else{
    el.textContent = skills[i].slice(0, --j);
    if(j === 0){
      del = false;
      i = (i + 1) % skills.length;
    }
  }
  setTimeout(type, del ? 80 : 120);
}

type();
