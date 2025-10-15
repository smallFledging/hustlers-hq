// import funcs
// import { renderMealCard, renderMealsCategories } from "./renderFuncs.js";
import { getData } from "./api.js";

// --- DOM elements
// const searchBtn = document.getElementById("searchBtn");
// const inputSearch = document.getElementById("inputSearch");
// const categoriesContainer = document.querySelector(".main__categories");
// const mealContainer = document.querySelector(".main__meal-container");


const randomBtn = document.querySelector("#random-meal");
const randomMealContainer = document.querySelector(".random-meal-block__card");
const randomMealImgEl = document.querySelector(".random-meal-block__img");
const randomMealTitleEl = document.querySelector(".random-meal-block__title");


// const mainRecipeContainer = document.querySelector(".main__recipe");
// const closeBtn = document.querySelector(".meal-recipe__btn");

// const containers = document.querySelectorAll(".main__meal-container, .random-meal-block__card");

window.addEventListener("DOMContentLoaded", async () => {
  // --- api data
  // const categories = await getData("https://www.themealdb.com/api/json/v1/1/categories.php");
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
  // if (categoriesContainer) {
  //   const mealsCategories = categories.categories;
  //   mealsCategories.forEach((el, ind) => {
  //     renderMealsCategories(
  //       categoriesContainer,
  //       el.strCategoryThumb,
  //       el.strCategory,
  //       el.strCategoryDescription,
  //       ind
  //     );
  //   });
  // }
});

if (randomBtn) {
  randomBtn.addEventListener("click", async (e) => {
    // console.log(e);
    const randomMealObj = await getData(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );

    // --- random meal card render
    const randomMeal = randomMealObj.meals[0];
    const randomMealImg = randomMeal.strMealThumb;
    const randomMealTitle = randomMeal.strMeal;
    const randomMealId = randomMeal.idMeal;
    randomMealImgEl.setAttribute(
      "src",
      randomMealImg ? randomMealImg : "./img/food.jpg"
    );
    randomMealTitleEl.innerText = randomMealTitle;
    randomMealContainer.setAttribute("id", randomMealId);
  });
}

// --- btn clicked event
// if (searchBtn) {
//   searchBtn.addEventListener("click", async (e) => {
//     // e.preventDefault()
//     mealContainer.innerHTML = "";
//     if (!inputSearch.value) alert("enter a meal title");
//     else {
//       const meals = await getData(
//         `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputSearch.value}`
//       );
//       const mealsArray = meals.meals;
//       // console.log(mealsArray);
//       for (const el of mealsArray) {
//         // console.log(el);
//         renderMealCard(
//           mealContainer,
//           el.idMeal,
//           el.strMealThumb,
//           el.strMeal,
//           "./recipeDetails.html"
//         );
//       }
//     }
//     inputSearch.value = "";
//   });
// }

// --- container clicked event
// randomMealContainer
// mealContainer
// containers.forEach((container) => {
// console.log(container);

// randomMealContainer.addEventListener("click", async (e) => {
//   const clickedEl = e.target;
//   const clickedCard = clickedEl.closest(".main__card");
//   const clickedCardId = clickedCard.getAttribute("id");

//   const mealRecipe = await getMealById(clickedCardId);
//   mainRecipeContainer.style.visibility = "visible";

//   // --- add content to recipe container
//   // --- DOM elements for top block
//   const recipeImg = document.querySelector(".meal-recipe__img");
//   const recipeTitle = document.querySelector(".meal-recipe__title");
//   const recipeArea = document.querySelector(".meal-recipe__area");
//   const recipeCategory = document.querySelector(".meal-recipe__category");

//   // --- insert content
//   recipeImg.setAttribute("src", mealRecipe.strMealThumb);
//   recipeTitle.innerText = mealRecipe.strMeal;
//   recipeArea.innerText = mealRecipe.strArea;
//   recipeCategory.innerText = mealRecipe.strCategory;

//   // --- DOM elements for middle block
//   const recipeIngredientsList = document.querySelector(
//     ".meal-recipe__ingredients-list"
//   );
//   const recipeMeasureList = document.querySelector(
//     ".meal-recipe__measures-list"
//   );
//   let countIngredients = 1;
//   let countMeasures = 1;
//   for (const key in mealRecipe) {
//     const strIngredient = `strIngredient${countIngredients}`;
//     const strMeasure = `strMeasure${countMeasures}`;
//     if (
//       key === strIngredient &&
//       mealRecipe[strIngredient] &&
//       mealRecipe[strIngredient] !== undefined &&
//       mealRecipe[strIngredient].trim !== "" &&
//       mealRecipe[strIngredient] !== " " &&
//       mealRecipe[strIngredient] !== null
//     ) {
//       const li = document.createElement("li");
//       li.innerText = mealRecipe[strIngredient];
//       recipeIngredientsList.append(li);
//       countIngredients += 1;
//     } else if (
//       key === strMeasure &&
//       mealRecipe[strMeasure] &&
//       mealRecipe[strMeasure] !== undefined &&
//       mealRecipe[strMeasure] !== " " &&
//       mealRecipe[strMeasure].trim !== "" &&
//       mealRecipe[strMeasure] !== null
//     ) {
//       const li = document.createElement("li");
//       li.innerText = mealRecipe[strMeasure];
//       recipeMeasureList.append(li);
//       countMeasures += 1;
//     }
//   }
//   // --- DOM elements for bottom block
//   const recipeInstruction = document.querySelector(".meal-recipe__info-text");
//   recipeInstruction.innerText = mealRecipe.strInstructions;
// });

// if (mealContainer) {
//   mealContainer.addEventListener("click", async (e) => {
//     const clickedEl = e.target;
//     const clickedCard = clickedEl.closest(".main__card");
//     const clickedCardId = clickedCard.getAttribute("id");

//     const mealRecipe = await getMealById(clickedCardId);
//     // console.log("mealRecipe", mealRecipe);
//     mainRecipeContainer.style.visibility = "visible";

//     // --- add content to recipe container
//     // --- DOM elements for top block
//     const recipeImg = document.querySelector(".meal-recipe__img");
//     const recipeTitle = document.querySelector(".meal-recipe__title");
//     const recipeArea = document.querySelector(".meal-recipe__area");
//     const recipeCategory = document.querySelector(".meal-recipe__category");

//     // --- insert content
//     recipeImg.setAttribute("src", mealRecipe.strMealThumb);
//     recipeTitle.innerText = mealRecipe.strMeal;
//     recipeArea.innerText = mealRecipe.strArea;
//     recipeCategory.innerText = mealRecipe.strCategory;

//     // --- DOM elements for middle block
//     const recipeIngredientsList = document.querySelector(
//       ".meal-recipe__ingredients-list"
//     );
//     // const recipeIngredientsLiElements = recipeIngredientsList.children;
//     const recipeMeasureList = document.querySelector(
//       ".meal-recipe__measures-list"
//     );
//     // const recipeMeasureLiElements = recipeMeasureList.children;

//     let countIngredients = 1;
//     let countMeasures = 1;
//     for (const key in mealRecipe) {
//       const strIngredient = `strIngredient${countIngredients}`;
//       const strMeasure = `strMeasure${countMeasures}`;
//       if (
//         key === strIngredient &&
//         mealRecipe[strIngredient] &&
//         mealRecipe[strIngredient] !== undefined &&
//         mealRecipe[strIngredient].trim !== "" &&
//         mealRecipe[strIngredient] !== " " &&
//         mealRecipe[strIngredient] !== null
//       ) {
//         // console.log(mealRecipe[strIngredient]);
//         const li = document.createElement("li");
//         li.innerText = mealRecipe[strIngredient];
//         recipeIngredientsList.append(li);
//         // console.log(key);
//         countIngredients += 1;
//         // console.log(countIngredients);
//       } else if (
//         key === strMeasure &&
//         mealRecipe[strMeasure] &&
//         mealRecipe[strMeasure] !== undefined &&
//         mealRecipe[strMeasure] !== " " &&
//         mealRecipe[strMeasure].trim !== "" &&
//         mealRecipe[strMeasure] !== null
//       ) {
//         const li = document.createElement("li");
//         li.innerText = mealRecipe[strMeasure];
//         recipeMeasureList.append(li);
//         // console.log(key);
//         countMeasures += 1;
//         // console.log(countMeasures);
//       }
//     }

//     // // --- insert data in li elements
//     // Array.from(recipeIngredientsLiElements).forEach((el, ind) => {
//     //   const strIngredient = `strIngredient${ind + 1}`;
//     //   // console.log(strIngredient, mealRecipe[strIngredient]);
//     //   el.innerText = mealRecipe[strIngredient];
//     // });

//     // Array.from(recipeMeasureLiElements).forEach((el, ind) => {
//     //   const strMeasure = `strMeasure${ind + 1}`;
//     //   // console.log(strMeasure, mealRecipe[strMeasure]);
//     //   el.innerText = mealRecipe[strMeasure];
//     // });

//     // --- DOM elements for bottom block
//     const recipeInstruction = document.querySelector(".meal-recipe__info-text");
//     recipeInstruction.innerText = mealRecipe.strInstructions;
//   });
// }
// });
// --- close btn event
// if (closeBtn) {
//   closeBtn.addEventListener("click", (e) => {
//     console.log(e.target);
//     console.log(mainRecipeContainer);
//     mainRecipeContainer.style.visibility = "hidden";
//   });
// }


