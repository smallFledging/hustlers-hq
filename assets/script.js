let searchBtn = document.getElementById("searchBtn");
let inputSearch = document.getElementById("inputSearch");

searchBtn.addEventListener("click", () => {
    console.log("clicked", "search term:", inputSearch.value);
})