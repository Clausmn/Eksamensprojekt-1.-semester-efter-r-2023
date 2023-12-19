document.addEventListener("DOMContentLoaded", function () {
try {
 function scrollToBottom(event) {
   event.preventDefault();

   // Scroll til nederst på siden ved klik på "Kontakt"
   window.scrollTo({
     top: document.body.scrollHeight,
     behavior: "smooth",
   });
 }

 var scrollToBottomLink = document.getElementById("scrollToBottom");
 var scrollToBottomLinkSocial = document.getElementById("scrollToBottomSocial"); // Brug et andet variabelnavn

 scrollToBottomLink.addEventListener("click", scrollToBottom);
} catch (error) {
 console.error("Der opstod en fejl i scrollToBottom:", error);
}

// Artikler index.html animation
const articles = document.querySelectorAll(".articles-container article");

function checkScroll() {
 articles.forEach((article) => {
   const articleTop = article.getBoundingClientRect().top;
   const windowHeight = window.innerHeight;

   if (articleTop <windowHeight - 50) {
     article.style.opacity = 1;
     article.style.transform = "translateY(0)" ;
   }
 });
}

window.addEventListener("scroll", checkScroll);
window.addEventListener("resize", checkScroll);

// Initial check on page load
checkScroll();
});
// Om Zero Summer indholdsliste
function toggleList() {
  var infoList = document.getElementById("info-list");
  var infoListStyle = window.getComputedStyle(infoList);

  infoList.style.display = (infoListStyle.display === "none" || infoListStyle.display === "") ? "block" : "none";
}
