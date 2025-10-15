// import funcs

import { renderMealCard, renderMealsCategories } from "./renderFuncs.js";
import { getData } from "./api.js";

// --- DOM elements
const searchBtn = document.getElementById("searchBtn");
const inputSearch = document.getElementById("inputSearch");
const categoriesContainer = document.querySelector(".main__categories");
const mealContainer = document.querySelector(".main__meal-container");
// const mainRecipeContainer = document.querySelector(".main__recipe");
// const closeBtn = document.querySelector(".meal-recipe__btn");

window.addEventListener("DOMContentLoaded", async () => {
  // --- api data
  const categories = await getData("https://www.themealdb.com/api/json/v1/1/categories.php");
  const mealsCategories = categories.categories;

  // --- meal categories cards render
  if (categoriesContainer) { // может нужно убрать проверку на контейнер ? не уверенна как лучше
    mealsCategories.forEach((el, ind) => {
      renderMealsCategories(
        categoriesContainer,
        el.strCategoryThumb,
        el.strCategory,
        el.strCategoryDescription,
        ind
      );
    });
  }
});

// --- btn clicked event
if (searchBtn) {
  searchBtn.addEventListener("click", async (e) => {
    // e.preventDefault()
    mealContainer.innerHTML = "";
    if (!inputSearch.value) alert("enter a meal title");
    else {
      const meals = await getData(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputSearch.value}`
      );
      const mealsArray = meals.meals;
      // console.log(mealsArray);
      for (const el of mealsArray) {
        // console.log(el);
        renderMealCard(
          mealContainer,
          el.idMeal,
          el.strMealThumb,
          el.strMeal,
          `./recipeDetails.html?id=${el.idMeal}`
        );
      }
    }
    inputSearch.value = "";
  });
}