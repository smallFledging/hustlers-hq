// import funcs
import { renderMealCard, renderMealsCategories } from "./renderFuncs.js";

// --- DOM elements
const searchBtn = document.getElementById("searchBtn");
const inputSearch = document.getElementById("inputSearch");
const categoriesContainer = document.querySelector(".main__categories");
const mealContainer = document.querySelector(".main__meal-container");
const randomMealContainer = document.querySelector('.random-meal-block__card')
const randomMealImgEl = document.querySelector('.random-meal-block__img')
const randomMealTitleEl = document.querySelector('.random-meal-block__title')

window.addEventListener("DOMContentLoaded", async () => {
  // --- api data
  const categories = await getData(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  const randomMealObj = await getData('https://www.themealdb.com/api/json/v1/1/random.php')
  const mealDetailsByIdObj = await getData('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
  
  console.log(mealDetailsByIdObj);

  // --- random meal card render
  const randomMeal = randomMealObj.meals[0]
  const randomMealImg = randomMeal.strMealThumb
  const randomMealTitle = randomMeal.strMeal
  const randomMealId = randomMeal.idMeal
  randomMealImgEl.setAttribute('src', randomMealImg)
  randomMealTitleEl.innerText = randomMealTitle
  randomMealContainer.setAttribute('id', randomMealId)

  // --- meal categories cards render
  const mealsCategories = categories.categories;
  mealsCategories.forEach((el, ind) => {
    // console.log(el);
    renderMealsCategories(
      categoriesContainer,
      el.strCategoryThumb,
      el.strCategory,
      el.strCategoryDescription,
      ind
    );
  });
});

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
    renderMealCard(mealContainer, el.strMealThumb, el.strMeal);
    //     const recipe =
    //       await getData(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${el.idMeal}
    // `);
  }
  inputSearch.value = "";
});

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
