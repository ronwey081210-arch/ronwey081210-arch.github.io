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
              <a class="nav-link" href="kontakt.html">Kontakt</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>`


let footer = document.getElementsByTagName("Footer");

footer[0].innerHTML = `<footer style="background:#111; color:#eee; padding:40px 20px; margin-top:40px; font-size:14px;">
  <div style="display:flex; flex-wrap:wrap; gap:40px; max-width:1000px; margin:auto;">

    <!-- Om oss -->
    <div style="flex:1; min-width:220px;">
      <h4 style="margin-bottom:10px; font-size:16px;">Optimus Auto Market</h4>
      <p>
        Vi erbjuder pålitliga och kvalitetsgranskade bilar för alla behov.
        Med fokus på trygghet och bra service strävar vi efter att leverera
        en trygg bilupplevelse.
      </p>
    </div>

    <!-- Kontakt -->
    <div style="flex:1; min-width:200px;">
      <h5 style="margin-bottom:10px; font-size:15px;">Kontakt</h5>
      <p>Telefon: 070-123 45 67</p>
      <p>E-post: info@optimusautomarket.se</p>
      <p>Adress: Optimusvägen 12, 123 45 Stockholm</p>
    </div>

    <!-- Sociala medier -->
    <div style="flex:1; min-width:200px;">
      <h5 style="margin-bottom:10px; font-size:15px;">Följ oss</h5>
      <p>Facebook: Optimus Auto Market</p>
      <p>Instagram: @OptimusAutoMarket</p>
    </div>

  </div>

  <div style="text-align:center; margin-top:30px; color:#aaa; font-size:13px;">
    © 2025 Optimus Auto Market — Alla rättigheter reserverade.
  </div>
</footer>
`;


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
