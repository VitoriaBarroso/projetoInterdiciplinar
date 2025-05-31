
  const carrousel = document.getElementById("carouselInner");
  const cards = document.querySelectorAll(".card1");
  let index = 0;

  function slideCarousel() {
    index++;
    if (index >= cards.length) {
      index = 0;
    }
    const cardWidth = cards[0].offsetWidth + 20; // 300px + margem
    carrousel.style.transform = `translateX(-${index * cardWidth}px)`;
  }

  setInterval(slideCarousel, 3000); // muda a cada 3 segundos


document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    const segundaSecao = document.querySelector(".segunda_section");

    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY;

        if (scrollTop > lastScrollTop) {
            // Rolando para baixo, esconde a segunda seção
            segundaSecao.classList.remove("fade-out");
        } else {
            // Rolando para cima, exibe a segunda seção
            segundaSecao.classList.add("fade-out");
        }

        lastScrollTop = scrollTop;
    });
});


