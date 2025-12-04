let header = document.getElementsByTagName("Header");
 
 header[0].innerHTML = `<nav class="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html">Tillbaka till startsidan</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="index.html">Hem</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="köpbil.html">Köp Bil</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about.html">Om oss</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="recensioner.html">Recensioner</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Kontakt.html">Kontakt</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>`


let footer = document.getElementsByTagName("Footer");

footer[0].innerHTML = `<h5> Optimus Auto Market
© 2025 Optimus Auto Market. Alla rättigheter reserverade.
070-123 45 67 
info@optimusautomarket.se
Facebook: Optimus Auto Market 
Instagram: @OptimusAutoMarket </h5>`;


const searchInput = document.getElementById("bil-sok");
const carCards = document.querySelectorAll("#bil-container .card");

searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase();

    carCards.forEach(card => {
        const text = card.innerText.toLowerCase();

        if (text.includes(query)) {
            card.parentElement.style.display = "block"; 
        } else {
            card.parentElement.style.display = "none"; 
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("bil-sok");
    const filterMarke = document.getElementById("filter-märke");
    const filterAr = document.getElementById("filter-år");
    const cards = document.querySelectorAll("#bil-container .col");

    function filterCars() {
        const search = searchInput.value.toLowerCase();
        const marke = filterMarke.value.toLowerCase();
        const ar = filterAr.value;

        cards.forEach(card => {
            const text = card.innerText.toLowerCase();

            const matchSearch = text.includes(search);
            const matchMarke = marke === "" || text.includes(marke);
            const matchAr = ar === "" || text.includes(ar);

            if (matchSearch && matchMarke && matchAr) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }

    searchInput.addEventListener("input", filterCars);
    filterMarke.addEventListener("change", filterCars);
    filterAr.addEventListener("change", filterCars);
});
