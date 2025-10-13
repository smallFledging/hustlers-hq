let searchBtn = document.getElementById("searchBtn");
let inputSearch = document.getElementById("inputSearch");


searchBtn.addEventListener("click", () => {
    console.log("clicked", "search term:", inputSearch.value);

      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputSearch.value}`)
    .then((response) => response.json())
    .then((data) => {
      console.log("Fetch API:", data);
      let recipeName = document.getElementById("recipeName");
      recipeName.innerText = data.meals[0].strMeal;
      let recipeImg = document.getElementById("recipeImg");
      recipeImg.src = data.meals[0].strMealThumb;
      recipeImg.alt = data.meals[0].strMeal;
      inputSearch.value = "";
    })
    .catch((error) => console.error("Fetch error:", error));
})

// api https://www.themealdb.com/api.php