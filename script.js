let links = document.querySelectorAll(".menu-link");
for(let i =0 ; i< links.length;i++){
  links[i].addEventListener("click",function(){
    document.querySelector(".container").classList.replace("change" , "container");
  })
}
window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 2000);
};

document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});


document.querySelector(".scroll-btn").addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 1000);
});

