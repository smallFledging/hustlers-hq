// import funcs
import { renderMealCard, renderMealsCategories } from "./renderFuncs.js";

// --- DOM elements
const searchBtn = document.getElementById("searchBtn");
const inputSearch = document.getElementById("inputSearch");
const categoriesContainer = document.querySelector(".main__categories");
const mealContainer = document.querySelector(".main__meal-container");
const randomMealContainer = document.querySelector(".random-meal-block__card");
const randomMealImgEl = document.querySelector(".random-meal-block__img");
const randomMealTitleEl = document.querySelector(".random-meal-block__title");

window.addEventListener("DOMContentLoaded", async () => {
  // --- api data
  const categories = await getData(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  const randomMealObj = await getData(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );

  // --- random meal card render
  const randomMeal = randomMealObj.meals[0];
  const randomMealImg = randomMeal.strMealThumb;
  const randomMealTitle = randomMeal.strMeal;
  const randomMealId = randomMeal.idMeal;
  randomMealImgEl.setAttribute("src", randomMealImg);
  randomMealTitleEl.innerText = randomMealTitle;
  randomMealContainer.setAttribute("id", randomMealId);

  // --- meal categories cards render
  const mealsCategories = categories.categories;
  mealsCategories.forEach((el, ind) => {
    renderMealsCategories(
      categoriesContainer,
      el.strCategoryThumb,
      el.strCategory,
      el.strCategoryDescription,
      ind
    );
  });
});

// --- btn clicked event
searchBtn.addEventListener("click", async (e) => {
  // e.preventDefault()
  mealContainer.innerHTML = "";
  const meals = await getData(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputSearch.value}`
  );
  const mealsArray = meals.meals;
  // console.log(mealsArray);
  for (const el of mealsArray) {
    // console.log(el);
    renderMealCard(mealContainer, el.idMeal, el.strMealThumb, el.strMeal);
  }
  inputSearch.value = "";
});

// --- container clicked event
mealContainer.addEventListener("click", async (e) => {
  const clickedEl = e.target;
  const clickedCard = clickedEl.closest(".main__card");
  const clickedCardId = clickedCard.getAttribute("id");

  const mealRecipe = await getMealById(clickedCardId);
  console.log("mealRecipe", mealRecipe);

  // --- add content to recipe container
  // --- DOM elements for top block
  const recipeImg = document.querySelector(".meal-recipe__img");
  const recipeTitle = document.querySelector(".meal-recipe__title");
  const recipeArea = document.querySelector(".meal-recipe__area");
  const recipeCategory = document.querySelector(".meal-recipe__category");

  // --- insert content
  recipeImg.setAttribute("src", mealRecipe.strMealThumb);
  recipeTitle.innerText = mealRecipe.strMeal;
  recipeArea.innerText = mealRecipe.strArea
  recipeCategory.innerText = mealRecipe.strCategory

  // --- DOM elements for middle block
  const recipeIngredientsList = document.querySelector(
    ".meal-recipe__ingredients-list"
  );
  const recipeIngredientsLiElements = recipeIngredientsList.children;
  const recipeMeasureList = document.querySelector(
    ".meal-recipe__measures-list"
  );
  const recipeMeasureLiElements = recipeMeasureList.children;

  // --- DOM elements for bottom block
  const recipeInstruction = document.querySelector(".meal-recipe__info-text");
  recipeInstruction.innerText = mealRecipe.strInstructions
});

async function getMealById(id) {
  const mealDetailsByIdObj = await getData(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const mealDetails = mealDetailsByIdObj.meals[0];
  console.log("mealDetails", mealDetails);
  return mealDetails;
}

async function getData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
    return [];
  }
}
