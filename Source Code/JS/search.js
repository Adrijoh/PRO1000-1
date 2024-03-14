/* OpenAI. (2024). ChatGPT 03.03.2024. https://chat.openai.com.
Koden er generert av ChatGPT. */

/*Legg inn søk data her*/
var manualSearchData = [
    { title: "Bli medlem/priser/reservasjon", text: "Booking, medlem, priser, kontor", link: "Source Code/HTML/Booking.html" },
    { title: "Informasjon om oss", text: "Hvem, info, verdier, historie, misjon", link: "Source Code/HTML/AboutUs.html" },
    { title: "Kontakt oss", text: "Hvor, kart, finn", link: "Source Code/HTML/Kontakt.html" },
];

var basePath = "";

document.addEventListener("DOMContentLoaded", function() {

    if (window.location.pathname.includes("Source Code/HTML")) {
        basePath = "../../";
    } else {
        basePath = "";
    }

    var searchInput = document.getElementById("search-input");
    var searchResults = document.getElementById("search-results");

    searchInput.addEventListener("input", function() {
        var searchTerm = searchInput.value.toLowerCase();
        if (searchTerm === "") {
            searchResults.style.display = "none";
        } else searchResults.style.display = "block";

        var filteredResults = performSearch(searchTerm);

        displayResults(filteredResults);
    });

    function performSearch(term) {
        var results = [];

        manualSearchData.forEach(function(item) {
            if (item.title.toLowerCase().includes(term) || item.text.toLowerCase().includes(term)) {
                results.push({ title: item.title, link: item.link });
            }
        });

        return results;
    }

    function displayResults(results) {
        searchResults.innerHTML = "";

        updateBasePath();

        results.forEach(function(result) {
            var resultElement = document.createElement("div");
            var linkElement = document.createElement("a");
            linkElement.href = basePath + result.link;
            linkElement.textContent = result.title;
            resultElement.appendChild(linkElement);
            searchResults.appendChild(resultElement);
        });
    }
});

function updateBasePath() {
    if (window.location.pathname.includes("Source")) {
        basePath = "../../";
    } else {
        basePath = "";
    }
}